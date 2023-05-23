import MainLayout from "../components/Layouts/MainLayout";
import { FeatureMedia } from "../components/UI/Featured-Media/FeatureMedia";
import { ForYouList } from "../components/UI/ForYouList/ForYouList";
import { JustAddedList } from "../components/UI/JustAddedList/JustAddedList";
import { PosterViewList } from "../components/UI/PosterViewList/PosterViewList";

export default function HomeView() {
  return (
    <MainLayout>
      <FeatureMedia />
      <ForYouList />
      <JustAddedList />
      <PosterViewList />
    </MainLayout>
  );
}
