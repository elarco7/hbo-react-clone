import { useStateContext } from "../components/HBOProvider";
import MainLayout from "../components/Layouts/MainLayout";
import { FeatureMedia } from "../components/UI/Featured-Media/FeatureMedia";
import { AuthCheck } from "../components/AuthCheck";
import { MediaRow } from "../components/UI/MediaRow/MediaRow";
import _ from "../utilities/constants";
import LazyLoad from "react-lazyload";
import { Placeholder } from "../components/UI/ImagePlaceholder/Placeholder";
export default function Home({}) {
  const state = useStateContext();

  return AuthCheck(
    <MainLayout>
      <FeatureMedia />
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Adeventure Movies" type={"large-v"} num={7} />
        }
      >
        <MediaRow
          title="Adventure Movies"
          type={"large-v"}
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ADVENTURE_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Popular Series" type={"small-h"} num={7} />
        }
      >
        <MediaRow
          title="Popular Series"
          type={"small-h"}
          db={{
            url: `${_.POPULAR_TV_URL}&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Action Movies" type={"small-v"} num={7} />
        }
      >
        <MediaRow
          title="Action Movies"
          type={"small-v"}
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.ACTION_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Sci-fi Movies" type={"large-h"} num={7} />
        }
      >
        <MediaRow
          title="Sci-fi Movies"
          type={"large-h"}
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.SCI_FI_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder title="Horror Movies" type={"large-v"} num={7} />
        }
      >
        <MediaRow
          title="Horror Movies"
          type={"large-v"}
          db={{
            url: `${_.DISCOVER_MOVIE_URL}with_genres=${_.HORROR_ID}&primary_release_year=2023&api_key=${_.API_KEY}`,
          }}
        />
      </LazyLoad>
    </MainLayout>
  );
}
