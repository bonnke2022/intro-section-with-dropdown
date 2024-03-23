import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper width="32" height="18" xmlns="http://www.w3.org/2000/svg">
      <g fill="#151515" fillRule="evenodd">
        <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
      </g>
    </Wrapper>
  );
};

const Wrapper = styled.svg`
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export default Menu;
