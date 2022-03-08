import React, { useState, useEffect } from "react";
import { TracksList, SectionWrapper, RangeButtons, Loader } from "../components";
import { getCurrentUserTopTracks } from "../spotify";
import { catchErrors } from "../utils";

const TopTracksPage = () => {
    const [userTopTracks, setUserTopTracks] = useState(null);
  const [activeTimeRange, setActiveTimeRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      //from our time range endpoint in Spotify.js, we can manipulate the value to fetch data accordingly.
      const topTracks = await getCurrentUserTopTracks(
        `${activeTimeRange}_term`
      );
      setUserTopTracks(topTracks.data);
    };

    catchErrors(fetchData());
  }, [activeTimeRange]);

  return (
    <main>
      {userTopTracks ? (
        <SectionWrapper title="Top Tracks" breadcrumb="true">
          <RangeButtons
            activeTimeRange={activeTimeRange}
            setActiveTimeRange={setActiveTimeRange}
          />

          <TracksList tracks={userTopTracks.items} />
        </SectionWrapper>
      ) : (
          <Loader/>
      )
    }
    </main>
  );

}

export default TopTracksPage