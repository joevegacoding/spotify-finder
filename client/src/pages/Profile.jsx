import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import {
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getCurrentUserTopArtists,
  getCurrentUserTopTracks,
} from "../spotify";
import {
  SectionWrapper,
  Artists,
  TracksList,
  Playlists,
  Loader,
} from "../components";
import { StyledHeader } from "../styles";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userTopArtists, setUserTopArtists] = useState(null);
  const [userTopTracks, setUserTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfileData = await getCurrentUserProfile();
      setUserProfile(userProfileData.data);

      const playlists = await getCurrentUserPlaylists();
      setUserPlaylists(playlists.data);

      const topArtists = await getCurrentUserTopArtists();
      setUserTopArtists(topArtists.data);

      const topTracks = await getCurrentUserTopTracks();
      setUserTopTracks(topTracks.data);

      console.log(topTracks.data);
    };
    catchErrors(fetchData());
  }, []);

  return (
    <>
      {userProfile && (
        <StyledHeader type="user">
          <div className="header__inner">
            {userProfile.images.length && userProfile.images[0].url && (
              <img
                className="header__img"
                src={userProfile.images[0].url}
                alt="Avatar"
              />
            )}
            <div>
              <div className="header__overline">Profile</div>
              <h1 className="header__name">{userProfile.display_name}</h1>
              <p className="header__meta">
                {userPlaylists && (
                  <span>
                    {userPlaylists.total} Playlist
                    {userPlaylists.total > 1 ? "s" : ""}
                  </span>
                )}
                <span>
                  {userProfile.followers.total} Follower
                  {userProfile.followers.total > 1 ? "s" : ""}
                </span>
              </p>
            </div>
          </div>
        </StyledHeader>
      )}
      {userPlaylists && userTopTracks && userTopArtists ? (
        <main>
          <SectionWrapper
            title="Top artists this month"
            seeAllLink="/top-artists"
          >
            <Artists topArtists={userTopArtists.items.slice(0, 10)} />
          </SectionWrapper>

          <SectionWrapper
            title="Top Tracks This Month"
            seeAllLink="/top-tracks"
          >
            <TracksList tracks={userTopTracks.items.slice(0, 10)} />
          </SectionWrapper>

          <SectionWrapper title="My Playlists" seeAllLink="/playlists">
            <Playlists playlists={userPlaylists.items.slice(0, 10)} />
          </SectionWrapper>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
