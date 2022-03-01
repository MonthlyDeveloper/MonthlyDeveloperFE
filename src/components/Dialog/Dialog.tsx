import React from "react";
import * as STC from "./Dialog.style";

export type DialogProps = {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm(): void;
  onCancel?(): void;
  isDestructive?: boolean;
};

function Dialog({
  title,
  message,
  confirmText = "OK",
  cancelText = "CANCEL",
  onConfirm,
  onCancel,
  isDestructive = false,
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
              <STC.CancelButton onClick={onCancel}>
                {cancelText}
              </STC.CancelButton>
            )}
            <STC.ConfirmButton
              isDestructive={isDestructive}
              onClick={onConfirm}
            >
              {confirmText}
            </STC.ConfirmButton>
          </STC.Buttons>
        </STC.WhiteBox>
      </STC.CenterWrapper>
    </>
  );
}

export default Dialog;
