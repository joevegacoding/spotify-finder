import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { useEffect, useState } from "react";
import styled from 'styled-components/macro';
import {GlobalStyle} from './styles'
import Login from "./pages/Login";





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [token, setToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);
    const fetchData = async () => {
     
        const { data } = await getCurrentUserProfile();
        setUserProfile(data);
     
    };
    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
      <header className="App-header">
        {!token ? (
       <Login/>
        ) : (
          <Router>
            <ScrollToTop/>
          <Switch>
            <Route path="/top-artists">
              <h1>Top Artists</h1>
            </Route>
            <Route path="/top-tracks">
              <h1>Top Tracks</h1>
            </Route>
            <Route path="/playlists/:id">
              <h1>Playlist</h1>
            </Route>
            <Route path="/playlists">
              <h1>Playlists</h1>
            </Route>
            <Route path="/">
              <>
                <button onClick={logout}>Log Out</button>

                {userProfile && (
                  <div>
                    <h1>{userProfile.display_name}</h1>
                    <p>{userProfile.followers.total} Followers</p>
                    {userProfile.images.length && userProfile.images[0].url && (
                      <img src={userProfile.images[0].url} alt="Avatar"/>
                    )}
                  </div>
                )}
              </>
            </Route>
          </Switch>
        </Router>
        )}
      </header>
    </div>
  );
}

export default App;
