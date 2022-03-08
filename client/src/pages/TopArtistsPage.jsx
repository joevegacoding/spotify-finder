import React, { useState, useEffect } from "react";
import { Artists, SectionWrapper, RangeButtons, Loader } from "../components";
import { getCurrentUserTopArtists } from "../spotify";
import { catchErrors } from "../utils";

const TopArtistsPage = () => {
  const [userTopArtists, setUserTopArtists] = useState(null);
  const [activeTimeRange, setActiveTimeRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      //from our time range endpoint in Spotify.js, we can manipulate the value to fetch data accordingly.play
      const topArtists = await getCurrentUserTopArtists(
        `${activeTimeRange}_term`
      );
      setUserTopArtists(topArtists.data);

    //   console.log(topArtists.data)
    };

   

    catchErrors(fetchData());
  }, [activeTimeRange]);

  return (
    <main>
      {userTopArtists ? (
        <SectionWrapper title="Top Artists" breadcrumb="true">
          <RangeButtons
            activeTimeRange={activeTimeRange}
            setActiveTimeRange={setActiveTimeRange}
          />

          <Artists topArtists={userTopArtists.items.slice(0, 20)} />
        </SectionWrapper>
      ) : (
        <Loader/>
      )
    
    }
    </main>
  );
};

export default TopArtistsPage;
