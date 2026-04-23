import { useState } from "react";
import ActionButtons from "./components/ActionButtons";
import FeedbackMessage from "./components/FeedbackMessage";
import Header from "./components/Header";
import HistoryPreview from "./components/HistoryPreview";
import InsightBox from "./components/InsightBox";
import OutfitCard from "./components/OutfitCard";
import PreferencesModal from "./components/PreferencesModal";
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
  getTodayKey,
  savePreference,
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
  const [preference, setPreference] = useState(() => getPreference());
  const [streak, setStreak] = useState(() => getResolvedStreak());
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
  };

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-7">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col gap-4">
        <Header
          dayLabel={formatDayLabel()}
          occasion="Daily Routine"
          preference={preference || "Set style"}
          onOpenPreferences={() => setIsPreferencesOpen(true)}
        />

        <OutfitCard outfit={currentOutfit} note={note} />

        <ActionButtons onAccept={handleAccept} onShuffle={handleShuffle} />

        <FeedbackMessage streakCount={streak.count} acceptedToday={acceptedToday} />

        <InsightBox message={insightMessage} />

        <HistoryPreview history={historyPreview} />
      </div>

      <PreferencesModal
        isOpen={isPreferencesOpen}
        isRequired={!preference}
        preference={preference}
        onClose={() => setIsPreferencesOpen(false)}
        onSelect={handlePreferenceChange}
      />
    </main>
  );
}

export default App;
