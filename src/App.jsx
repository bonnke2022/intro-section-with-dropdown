import styled from "styled-components";
import { Header, LandingPage } from "./components";

const App = () => {
  return (
    <Wrapper className="container flex">
      <Header />
      <LandingPage />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  gap: 2rem;
  position: relative;
  padding: 2rem;
  @media (min-width: 1440px) {
    width: 1440px;
    max-width: 100%;
    max-height: 100vh;
  }
`;

export default App;
