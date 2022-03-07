import styled from 'styled-components/macro';
import loginImage from '../assets/spotify-login.jpg';
import appLogo from "../assets/spotify-finder-logo.png"
import spotifyLogo from '../assets/spotify-logo.png'
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

img {
height: 100%;
width: 100%;
object-fit: cover;
}


`;
const StyledLoginTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* margin: auto; */
gap: 6rem;

@media (max-width: 768px) {

  gap: 3rem;
}
img {
  width: 80%;
}


`;


const StyledLoginText = styled.h3`
  

`;

const StyledLoginMessage = styled.div`

h1 {

  font-size: clamp(1rem, 4vw, 4rem);
}
h3 {
  font-size: clamp(.8rem, 2vw, 2rem);
  margin-top: 2rem;
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
  font-size: var(--fz-xl);
  padding: clamp(.5rem, 1vw, 1rem) clamp(.6rem, 2vw, 1.5rem);

  /* padding-block: clamp(var(--spacing-xs), 1vw, var(--spacing-md)); */

img {
  width:15%;
  margin-right: 1%;
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

      Log in to Spotify
    </StyledLoginButton>
    </StyledLoginTextContainer>
  </StyledLoginContainer>
);

export default Login;