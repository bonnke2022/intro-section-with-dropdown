import styled from "styled-components";
import imageHeroMobile from "../images/image-hero-mobile.png";
import imageHero from "../images/image-hero-desktop.png";
import { DataBiz, Audiophile, Meet, Maker } from "../images";

const LandingPage = () => {
  return (
    <Wrapper className="flex ff-epilogue fs-180">
      <img src={imageHeroMobile} alt="hero" className="hero" />
      <img src={imageHero} alt="bigHero" className="bigHero" />
      <div className="work">
        <div className="remote flex">
          <h1 className="text-black fw-700">
            <span>Make</span> remote work
          </h1>
          <p className="text-gray team">
            Get your team in sync, no matter your location. Streamline
            processes, create rituals, and watch productivity soar.
          </p>
          <button type="button" className="learn-btn btn text-white fw-700">
            Learn more
          </button>
        </div>
        <div className="icon-brands flex">
          <DataBiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 375px;
  flex-direction: column;
  gap: 3rem;

  .bigHero {
    display: none;
  }

  .remote {
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }
  .remote > h1 {
    width: 100%;
    white-space: nowrap;
    font-size: 2.5rem;
  }
  .remote > p {
    line-height: 1.5;
    text-align: center;
  }
  .learn-btn {
    background: var(--Almost-Black);
    padding: 1.2rem 2rem;
    border-radius: 1rem;
    outline: none;
    cursor: pointer;
  }
  .learn-btn:hover {
    background: var(--Almost-White);
    color: var(--Almost-Black);
  }
  .icon-brands {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 1040px;
    padding: 4rem;
    flex-direction: row;
    .hero {
      display: none;
    }
    .bigHero {
      display: block;
      width: 50%;
      order: 2;
    }
    .work {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 5rem 0 0 -9rem;
    }
    .remote {
      gap: 2rem;
    }
    .learn-btn {
      align-self: flex-start;
    }
    .remote > h1 {
      font-size: 4rem;
    }
    .remote > h1 > span {
      display: block;
    }
    .remote > p {
      margin-right: 2.5rem;
      text-align: left;
    }
  }
`;

export default LandingPage;
