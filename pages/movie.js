import MainLayout from "../components/Layouts/MainLayout";
import { CastInfo } from "../components/UI/CastInfo/CastInfo";
import { FeatureMedia } from "../components/UI/Featured-Media/FeatureMedia";
import { PosterViewList } from "../components/UI/PosterViewList/PosterViewList";

export default function HomeView() {
  return (
    <MainLayout>
      <FeatureMedia />
      <PosterViewList />
      <CastInfo />
    </MainLayout>
  );
}
