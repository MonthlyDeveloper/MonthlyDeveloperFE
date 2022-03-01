import React from "react";
import Button from "@components/Button";
import * as STC from "./Dialog.style";

export type DialogProps = {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm(): void;
  onCancel?(): void;
};

function Dialog({
  title,
  message,
  confirmText = "OK",
  cancelText = "CANCEL",
  onConfirm,
  onCancel,
  visible,
}: DialogProps) {
  if (!visible) return null;
  return (
    <>
      <STC.Overlay />
      <STC.CenterWrapper>
        <STC.WhiteBox>
          <h3>{title}</h3>
          <p>{message}</p>
          <STC.Buttons>
            {onCancel && (
              <Button
                content={cancelText}
                btnTheme="secondary"
                disable={false}
                handleClick={onCancel}
              />
            )}
            <Button
              content={confirmText}
              btnTheme="primary"
              disable={false}
              handleClick={onConfirm}
            />
          </STC.Buttons>
        </STC.WhiteBox>
      </STC.CenterWrapper>
    </>
  );
}

export default Dialog;
