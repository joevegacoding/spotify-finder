import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            log in to Spotify
          </a>
        ) : (
          <>
            <h1>You're logged in!</h1>
            {userProfile && (
              <>
                <h1>{userProfile.display_name}</h1>
                {userProfile.images.length && userProfile.images[0].url && (
                  <img
                    style={{ borderRadius: "50%" }}
                    src={userProfile.images[0].url}
                    alt="avatar"
                  />
                )}
                <p>{userProfile.followers.total} Followers</p>
              </>
            )}
            <button onClick={logout}>Log out</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
