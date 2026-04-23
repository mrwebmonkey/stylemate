import { useState } from "react";
import ActionButtons from "./components/ActionButtons";
import FeedbackMessage from "./components/FeedbackMessage";
import Header from "./components/Header";
import HistoryPreview from "./components/HistoryPreview";
import InsightBox from "./components/InsightBox";
import OutfitCard from "./components/OutfitCard";
import PreferencesPanel from "./components/PreferencesPanel";
import PreferencesModal from "./components/PreferencesModal";
import TabNavigation from "./components/TabNavigation";
import ThemeSelectionScreen from "./components/ThemeSelectionScreen";
import { OUTFITS } from "./data/outfits";
import {
  acceptOutfit,
  getDailySuggestion,
  getHistory,
  getHistoryPreview,
  getInsightMessage,
  getOutfitNote,
  getPreference,
  getResolvedStreak,
  getTheme,
  getTodayKey,
  savePreference,
  saveTheme,
  shuffleSuggestion,
} from "./utils/outfitEngine";

const formatDayLabel = () =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

function App() {
  const [history, setHistory] = useState(() => getHistory());
  const [theme, setTheme] = useState(() => getTheme());
  const [preference, setPreference] = useState(() => getPreference());
  const [streak, setStreak] = useState(() => getResolvedStreak());
  const [activeTab, setActiveTab] = useState("home");
  const [currentOutfit, setCurrentOutfit] = useState(() =>
    getDailySuggestion({
      outfits: OUTFITS,
      history: getHistory(),
      preference: getPreference(),
    }),
  );
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(() => !getPreference());
  const [acceptedToday, setAcceptedToday] = useState(() => streak.lastAccepted === getTodayKey());

  const note = getOutfitNote(currentOutfit, history);
  const insightMessage = getInsightMessage({ outfits: OUTFITS, history, preference });
  const historyPreview = getHistoryPreview(history);
  const pageClassName =
    theme === "boy"
      ? "bg-gray-900 text-white"
      : "bg-gradient-to-b from-rose-100 via-fuchsia-50 to-violet-100 text-slate-900";

  const handleThemeChange = (nextTheme) => {
    saveTheme(nextTheme);
    setTheme(nextTheme);
  };

  const handleAccept = () => {
    const result = acceptOutfit({ outfit: currentOutfit, history });
    setHistory(result.history);
    setStreak(result.streak);
    setAcceptedToday(true);
  };

  const handleShuffle = () => {
    const nextOutfit = shuffleSuggestion({
      outfits: OUTFITS,
      history,
      preference,
      currentOutfitId: currentOutfit.id,
    });

    setCurrentOutfit(nextOutfit);
    setAcceptedToday(streak.lastAccepted === getTodayKey());
  };

  const handlePreferenceChange = (nextPreference) => {
    savePreference(nextPreference);
    setPreference(nextPreference);

    const nextOutfit = shuffleSuggestion({
      outfits: OUTFITS,
      history,
      preference: nextPreference,
      currentOutfitId: currentOutfit.id,
    });

    setCurrentOutfit(nextOutfit);
    setIsPreferencesOpen(false);
    setActiveTab("home");
  };

  const handlePreferencePanelChange = (nextPreference) => {
    savePreference(nextPreference);
    setPreference(nextPreference);

    const nextOutfit = shuffleSuggestion({
      outfits: OUTFITS,
      history,
      preference: nextPreference,
      currentOutfitId: currentOutfit.id,
    });

    setCurrentOutfit(nextOutfit);
  };

  if (!theme) {
    return <ThemeSelectionScreen onSelectTheme={handleThemeChange} />;
  }

  return (
    <main className={`min-h-screen px-4 py-5 sm:px-6 sm:py-7 ${pageClassName}`}>
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col gap-4">
        <Header
          dayLabel={formatDayLabel()}
          occasion="Daily Routine"
          preference={preference || "Set style"}
          onOpenPreferences={() => setActiveTab("preferences")}
          theme={theme}
        />

        <TabNavigation activeTab={activeTab} onChange={setActiveTab} theme={theme} />

        {activeTab === "home" && (
          <>
            <OutfitCard outfit={currentOutfit} note={note} theme={theme} />

            <ActionButtons onAccept={handleAccept} onShuffle={handleShuffle} theme={theme} />

            <FeedbackMessage streakCount={streak.count} acceptedToday={acceptedToday} theme={theme} />

            <InsightBox message={insightMessage} theme={theme} />

            <HistoryPreview history={historyPreview} theme={theme} title="Last 2 outfits" limit={2} />
          </>
        )}

        {activeTab === "history" && (
          <HistoryPreview history={history} theme={theme} title="Recent outfit history" limit={2} />
        )}

        {activeTab === "preferences" && (
          <PreferencesPanel
            preference={preference}
            theme={theme}
            onChangePreference={handlePreferencePanelChange}
            onChangeTheme={handleThemeChange}
          />
        )}
      </div>

      <PreferencesModal
        isOpen={isPreferencesOpen}
        isRequired={!preference}
        preference={preference}
        onClose={() => setIsPreferencesOpen(false)}
        onSelect={handlePreferenceChange}
        theme={theme}
      />
    </main>
  );
}

export default App;
