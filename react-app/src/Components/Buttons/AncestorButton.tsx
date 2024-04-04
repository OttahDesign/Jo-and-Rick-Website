import styled from "styled-components";
import "../../Animations/ButtonHover.css";

const GlobalButton = styled.button`
  background: transparent;
  color: white;
  font-size: 2rem;
  border: 1px solid white;
  width: 70%;
  margin: 0.3rem;
`;

interface ButtonProps {
  children: string;
}
function AncestorButton({ children }: ButtonProps) {
  return <GlobalButton className="custom-button">{children}</GlobalButton>;
}

export default AncestorButton;