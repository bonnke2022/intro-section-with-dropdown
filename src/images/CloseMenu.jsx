import styled from "styled-components";

const CloseMenu = () => {
  return (
    <Wrapper width="26" height="26" xmlns="http://www.w3.org/2000/svg">
      <g fill="#151515" fillRule="evenodd">
        <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
        <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
      </g>
    </Wrapper>
  );
};
const Wrapper = styled.svg``;

export default CloseMenu;
