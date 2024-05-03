import styled from "styled-components";

const GlobalButton = styled.div`
  background: transparent;
  color: white;
  border: 0;
  height: 2rem;
  width: calc(100% / 6);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Gradient = styled.div`
  height: 1px;
  width: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(160, 64, 182, 1) 100%
  );
  border: 0;
  border-radius: 1rem;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 1;
`;

const ButtonText = styled.p`
z-index: 2;
`
interface ButtonProps {
  children: string;
}
function PageButton({ children }: ButtonProps) {
  return (
    <GlobalButton className="page-button">
      <Gradient className="button-gradient"/>
      <ButtonText className="font-color">{children}</ButtonText>
    </GlobalButton>
  );
}

export default PageButton;
