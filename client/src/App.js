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
// import Login from "./pages/Login";
import {Login, Profile, TopArtistsPage, TopTracksPage, PlaylistsPage, PlaylistInfoPage} from './pages'




const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;




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
          <>
          <StyledLogoutButton onClick={logout} >Log Out</StyledLogoutButton>
       
          <Router>
            <ScrollToTop/>
          <Switch>
            <Route path="/top-artists">
            <TopArtistsPage/>
            </Route>
            <Route path="/top-tracks">
              <TopTracksPage/>
            </Route>
            <Route path="/playlists/:id">
      <PlaylistInfoPage/>
            </Route>
            <Route path="/playlists">
              <PlaylistsPage/>
            </Route>
            <Route path="/">
      
                <Profile/>
            
            </Route>
          </Switch>
        </Router>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
