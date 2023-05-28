import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Login from "../components/UI/Login/Login";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import MainLayout from "../components/Layouts/MainLayout";
import { FeatureMedia } from "../components/UI/Featured-Media/FeatureMedia";
import { AuthCheck } from "../components/AuthCheck";
import { MediaRow } from "../components/UI/MediaRow/MediaRow";
import _ from "../utilities/constants";
export default function Home({}) {
  const state = useStateContext();
  // const router = withRouter();
  // const

  // useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeatureMedia />
      <MediaRow
        title="Adventure Movies"
        dimensions={"large-v"}
        db={{
          url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ADVENTURE_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
        }}
      />
      <MediaRow
        title="Popular Series"
        dimensions={"small-h"}
        db={{
          url: `${_.POPULAR_TV_URL}&api_key=${_.API_KEY}`,
        }}
      />
      <MediaRow
        title="Action Movies"
        dimensions={"small-v"}
        db={{
          url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ACTION_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
        }}
      />
      <MediaRow
        title="Sci-fi Movies"
        dimensions={"large-h"}
        db={{
          url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.SCI_FI_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
        }}
      />
      <MediaRow
        title="Horror Movies"
        dimensions={"large-v"}
        db={{
          url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.HORROR_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
        }}
      />
    </MainLayout>
  );
}
