import styled from "styled-components/macro";
import loginImage from "../assets/spotify-login.jpg";
import appLogo from "../assets/spotify-finder-logo.png";
import spotifyLogo from "../assets/spotify-logo.png";

const StyledLoginContainer = styled.div`
  display: grid;

  @media (min-width: 350px) {
    overflow: hidden;
  }
  grid-template-columns: 1fr 1fr;
  max-height: 100vh;
  background-color: #000;
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLoginImageContainer = styled.div`
  /* width: 50%; */

height: 100vh;
  img {
    height: 100%;

    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 50%;

    img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
  }
  }
`;
const StyledLoginTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: white;
  height: 100%;
  /* margin: auto; */
  gap: 6rem;
  img {
    width: 400px;
    
  }
  @media (max-width: 768px) {
    height: 40vh;
    margin-block: 15%;
    justify-content: center;  
      gap: 3rem;
    /* padding-bottom: 3rem; */

    img {
      width: 300px;
    }
  }

  @media (max-width: 400px) {
    justify-content: flex-start;
height: 100vh;
margin-block: 15%;
    img {
      width: 250px;
    }
  }
`;

const StyledLoginMessage = styled.div`
  h1 {
    font-size: clamp(1.7rem, 4vw, 2.7rem);
  }

  h3 {
    font-size: clamp(1.2rem, 2vw, 1.8rem);
    margin-top: clamp(1.2rem, 2vh, 2rem);
    margin-inline: auto;
  }

  @media (max-width: 768px) {
    h1,
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    h1 {
    font-size: 1rem;
  }

  h3 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-inline: auto;
  }
  }
`;

const StyledLoginButton = styled.a`
  display: flex;
  justify-content: space-around;

  align-items: center;
  background-color: #1DB954;
  color: var(--white);
  border-radius: 30px;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: clamp(0.5rem, 1vw, 0.5rem) clamp(0.6rem, 2vw, 0.5rem);

  

  @media (max-width: 400px) {
    padding: 0;
    margin-bottom: 1rem;

  }

  img {
    width: 15%;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : " https://spotify-finer-app.herokuapp.com/login";

const Login = () => (
  <StyledLoginContainer>
    <StyledLoginImageContainer>
      <img src={loginImage} alt="" />
    </StyledLoginImageContainer>
    <StyledLoginTextContainer>
      <img src={appLogo} alt="app-logo" />
      <StyledLoginMessage>
        <h1>The world of music</h1>
        <h3>Discover your profile like never before</h3>
      </StyledLoginMessage>
      <StyledLoginButton href={LOGIN_URI}>
        <img src={spotifyLogo} alt="spotify-logo" />
        Sign in with Spotify
      </StyledLoginButton>
    </StyledLoginTextContainer>
  </StyledLoginContainer>
);

export default Login;
