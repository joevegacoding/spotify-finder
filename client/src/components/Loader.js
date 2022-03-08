import styled, { keyframes } from 'styled-components/macro';
import CircularProgress from '@mui/material/CircularProgress';
const dance = keyframes`
  from {
    height: 10px;
  }
  to {
    height: 100%;
  }
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50vh;

  .bars {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    width: 100px;
    min-width: 100px;
    height: 50px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    left: 0;
    right: 0;
  }
`;



const Loader = () => (
  <StyledLoader>
    <div className="bars">
    <CircularProgress color="inherit" />
    </div>
  </StyledLoader>
);

export default Loader;