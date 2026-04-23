const HISTORY_KEY = "stylemate-history";
const STREAK_KEY = "stylemate-streak";
const PREFERENCE_KEY = "stylemate-preference";
const SUGGESTION_KEY = "stylemate-suggestion";
const THEME_KEY = "theme";

const MAX_HISTORY = 7;
const RECENT_OUTFIT_WINDOW = 5;

const parseJson = (key, fallback) => {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
};

const saveJson = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const asDate = (dayKey) => {
  if (!dayKey) {
    return null;
  }

  const [year, month, day] = dayKey.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const getTodayKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getDayGap = (fromKey, toKey) => {
  const fromDate = asDate(fromKey);
  const toDate = asDate(toKey);

  if (!fromDate || !toDate) {
    return Number.POSITIVE_INFINITY;
  }

  const milliseconds = toDate.getTime() - fromDate.getTime();
  return Math.round(milliseconds / 86400000);
};

export const getHistory = () => parseJson(HISTORY_KEY, []);

export const getPreference = () => window.localStorage.getItem(PREFERENCE_KEY);

export const savePreference = (preference) => {
  window.localStorage.setItem(PREFERENCE_KEY, preference);
};

export const getTheme = () => window.localStorage.getItem(THEME_KEY);

export const saveTheme = (theme) => {
  window.localStorage.setItem(THEME_KEY, theme);
};

export const getResolvedStreak = (date = new Date()) => {
  const todayKey = getTodayKey(date);
  const streak = parseJson(STREAK_KEY, { count: 0, lastAccepted: null });

  if (!streak.lastAccepted) {
    return streak;
  }

  const gap = getDayGap(streak.lastAccepted, todayKey);

  if (gap <= 1) {
    return streak;
  }

  return { count: 0, lastAccepted: streak.lastAccepted };
};

const saveStreak = (streak) => {
  saveJson(STREAK_KEY, streak);
};

const getRecentIds = (history) =>
  new Set(history.slice(0, RECENT_OUTFIT_WINDOW).map((entry) => entry.id));

const getBaseCandidates = ({ outfits, preference, excludeId }) => {
  const withoutCurrent = outfits.filter((outfit) => outfit.id !== excludeId);

  if (!preference) {
    return withoutCurrent;
  }

  const preferred = withoutCurrent.filter((outfit) => outfit.tags.includes(preference));
  return preferred.length > 0 ? preferred : withoutCurrent;
};

const scoreOutfit = ({ outfit, history, preference }) => {
  const historyIndex = history.findIndex((entry) => entry.id === outfit.id);
  const freshnessScore =
    historyIndex === -1
      ? 3
      : Math.max(0.2, (MAX_HISTORY - historyIndex - 1) / MAX_HISTORY);
  const preferenceBoost = preference && outfit.tags.includes(preference) ? 1.4 : 0;
  const varietyBoost = Math.random() * 0.45;

  return freshnessScore + preferenceBoost + varietyBoost;
};

export const getOutfitNote = (outfit, history) => {
  const historyIndex = history.findIndex((entry) => entry.id === outfit.id);

  if (historyIndex === 0 || historyIndex === 1) {
    return "Worn recently";
  }

  if (historyIndex >= 0) {
    return "Back in rotation";
  }

  return "New combination";
};

export const pickOutfit = ({ outfits, history, preference, excludeId = null }) => {
  const baseCandidates = getBaseCandidates({ outfits, history, preference, excludeId });
  const recentIds = getRecentIds(history);
  const freshCandidates = baseCandidates.filter((outfit) => !recentIds.has(outfit.id));
  const candidates = freshCandidates.length > 0 ? freshCandidates : baseCandidates;
  const ranked = [...candidates]
    .map((outfit) => ({
      outfit,
      score: scoreOutfit({ outfit, history, preference }),
    }))
    .sort((left, right) => right.score - left.score);

  const shortlist = ranked.slice(0, Math.min(4, ranked.length));
  const selection = shortlist[Math.floor(Math.random() * shortlist.length)];

  return selection?.outfit ?? candidates[0] ?? outfits[0];
};

export const getDailySuggestion = ({ outfits, history, preference, date = new Date() }) => {
  const todayKey = getTodayKey(date);
  const storedSuggestion = parseJson(SUGGESTION_KEY, null);

  if (storedSuggestion?.dayKey === todayKey) {
    const existingOutfit = outfits.find((outfit) => outfit.id === storedSuggestion.outfitId);

    if (existingOutfit) {
      return existingOutfit;
    }
  }

  const outfit = pickOutfit({ outfits, history, preference });
  saveJson(SUGGESTION_KEY, { dayKey: todayKey, outfitId: outfit.id });
  return outfit;
};

export const shuffleSuggestion = ({ outfits, history, preference, currentOutfitId }) => {
  const outfit = pickOutfit({
    outfits,
    history,
    preference,
    excludeId: currentOutfitId,
  });

  saveJson(SUGGESTION_KEY, { dayKey: getTodayKey(), outfitId: outfit.id });
  return outfit;
};

export const acceptOutfit = ({ outfit, history, date = new Date() }) => {
  const todayKey = getTodayKey(date);
  const streak = getResolvedStreak(date);
  const gap = getDayGap(streak.lastAccepted, todayKey);

  let count = 1;

  if (streak.lastAccepted === todayKey) {
    count = streak.count;
  } else if (gap === 1) {
    count = streak.count + 1;
  }

  const nextStreak = { count, lastAccepted: todayKey };
  const nextHistory = [
    { ...outfit, wornOn: todayKey },
    ...history.filter((entry) => entry.wornOn !== todayKey),
  ].slice(0, MAX_HISTORY);

  saveJson(HISTORY_KEY, nextHistory);
  saveStreak(nextStreak);
  saveJson(SUGGESTION_KEY, { dayKey: todayKey, outfitId: outfit.id });

  return { history: nextHistory, streak: nextStreak };
};

export const getInsightMessage = ({ outfits, history, preference }) => {
  const historyTags = new Set(history.flatMap((entry) => entry.tags));
  const allTags = [...new Set(outfits.flatMap((outfit) => outfit.tags))];
  const forgottenTag = allTags.find((tag) => !historyTags.has(tag) && tag !== preference);

  if (forgottenTag) {
    return `You haven't worn ${forgottenTag} pieces in a while.`;
  }

  if (history.length > 0) {
    const lastLook = history[0];
    return `Last time you picked ${lastLook.top.toLowerCase()}, so today leans into variety.`;
  }

  if (preference) {
    return `Your ${preference} rotation is ready whenever you are.`;
  }

  return "Pick your usual style once, and StyleMate will keep suggestions more relevant.";
};

export const getHistoryPreview = (history) => history.slice(0, 2);
