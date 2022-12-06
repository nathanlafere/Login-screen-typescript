import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const Button = ({ title, state, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={state} >{title}</ButtonContainer>
};

export default Button;
