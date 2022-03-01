import React from "react";
import * as STC from "./Button.style";

interface IButtonProps {
  /** Button text */
  content: string;
  /** Button style */
  btnTheme: "primary" | "secondary";
  /** Set disable */
  disable: boolean;
  /** Click action */
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
