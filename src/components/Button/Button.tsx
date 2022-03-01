import React from "react";
import * as STC from "./Button.style";

interface IButtonProps {
  content: string;
  btnTheme: "primary" | "secondary";
  disable: boolean;
  handleClick: () => any;
}

const Button = ({ content, btnTheme, disable, handleClick }: IButtonProps) => {
  return (
    <STC.Wrapper
      type="button"
      btnTheme={btnTheme}
      disable={disable}
      onClick={() => {
        if (!disable && handleClick) {
          handleClick();
        }
      }}
    >
      {content}
    </STC.Wrapper>
  );
};

export default Button;
