import React, { useEffect, useState } from "react";
import axios from 'axios';
import { SectionWrapper, Playlists, Loader } from "../components";
import { catchErrors } from "../utils";
import { getCurrentUserPlaylists } from "../spotify";

const PlaylistsPage = () => {
  const [userPlaylistsData, setUserPlaylistsData] = useState(null);
  const [totalPlaylists, setTotalPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const playlists = await getCurrentUserPlaylists();
      setUserPlaylistsData(playlists.data);
    };
    catchErrors(fetchData());
  }, []);

  // Looks to see if there are more playlists to fetch when userPlaylistsData updates.
  //Then updates the state

  useEffect(() =>{
    
    if(!userPlaylistsData) {
      return;
    }

    //We need to fetch all the data in the playlists array because we only get a maximum of 20.
    //So we fetch the next set of 20 playlists every time if there are more.
    const fetchMoreData = async () => {
      if(userPlaylistsData.next) {
        const {data} = await axios.get(userPlaylistsData.next);
        setUserPlaylistsData(data)
      }
    };

    //to avoid creating an infinite loop, we use functional update  to update the playslists state variable

    setTotalPlaylists(totalPlaylists => ([
      ...totalPlaylists ? totalPlaylists : [],
      ...userPlaylistsData.items
    ]));

    catchErrors(fetchMoreData());

  }, [userPlaylistsData])

  return (
    <main>
      <SectionWrapper title="My Playlists" breadcrumb="true">
        {totalPlaylists ? (
          <Playlists playlists={totalPlaylists} />
        ) : (
          <Loader/>
        )
      
      }
      </SectionWrapper>
    </main>
  );
};

export default PlaylistsPage;
