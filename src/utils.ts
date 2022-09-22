import { QuestTab } from "./database";
import { Quest } from "./types/quest";

export const filterQuestsByTab = (quests: Quest[], currentTab: string): Quest[] => (
  currentTab === QuestTab.all
    ? quests
    : quests.filter((quest) => QuestTab[quest.type as keyof typeof QuestTab] === currentTab)
);
