import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import logo from "./logo.svg";
import { Sidebar, MobileNavigation } from "./components";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { GlobalStyle } from "./styles";
// import Login from "./pages/Login";
import {
  Login,
  Profile,
  TopArtistsPage,
  TopTracksPage,
  PlaylistsPage,
  PlaylistInfoPage,

} from "./pages";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  /* z-index: 10; */
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

  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      

      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <>
          <GlobalStyle />
            <StyledLogoutButton style={{zIndex: 100}} onClick={logout}>Log Out</StyledLogoutButton>

            <Router>
              <ScrollToTop />
              <Sidebar />
              <Switch>
                <Route path="/top-artists">
                  <TopArtistsPage />
                </Route>
                <Route path="/top-tracks">
                  <TopTracksPage />
                </Route>
                <Route path="/playlists/:id">
                  <PlaylistInfoPage />
                </Route>
                <Route path="/playlists">
                  <PlaylistsPage />
                </Route>
                <Route path="/">
                  <Profile />
                </Route>
              </Switch>
            <MobileNavigation/>
            </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
