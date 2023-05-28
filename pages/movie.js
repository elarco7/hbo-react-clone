import { AuthCheck } from "../components/AuthCheck";
import MainLayout from "../components/Layouts/MainLayout";
import { CastInfo } from "../components/UI/CastInfo/CastInfo";
import { FeatureMedia } from "../components/UI/Featured-Media/FeatureMedia";
import { MediaRow } from "../components/UI/MediaRow/MediaRow";
import _ from "../utilities/constants";

export default function HomeView() {
  return AuthCheck(
    <MainLayout>
      <FeatureMedia />
      <MediaRow
        title="Action Movies"
        dimensions={"small-v"}
        db={{
          url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ACTION_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
        }}
      />
      <CastInfo />
    </MainLayout>
  );
}
