import styled from "styled-components/macro";
import loginImage from "../assets/spotify-login.jpg";
import appLogo from "../assets/spotify-finder-logo.png";
import spotifyLogo from "../assets/spotify-logo.png";
const StyledLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLoginImageContainer = styled.div`
  /* width: 50%; */
  height: 100vh;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 50%;
  }
`;
const StyledLoginTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  /* margin: auto; */
  gap: 6rem;
  img {
    width: 400px;
  }
  @media (max-width: 768px) {
    height: 30%;
    justify-content: flex-end;
    gap: 3rem;
    padding-bottom: 3rem;

    img {
    width: 300px;
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
h1, h3 {
  text-align: center;
}
  }

 
`;

const StyledLoginButton = styled.a`
  display: flex;
  justify-content: space-around;

  align-items: center;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  /* font-size: var(--fz-xl); */
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: clamp(0.5rem, 1vw, .5rem) clamp(0.6rem, 2vw, .5rem);

  img {
    width: 15%;

  }
  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

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
      <StyledLoginButton href="http://localhost:8888/login">
        <img src={spotifyLogo} alt="spotify-logo" />
        Sign in with Spotify
      </StyledLoginButton>
    </StyledLoginTextContainer>
  </StyledLoginContainer>
);

export default Login;
