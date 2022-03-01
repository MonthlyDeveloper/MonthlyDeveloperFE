import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useGlobalDialogActions } from "@atoms/globalDialogState";
import { DialogProps } from "@components/Dialog/Dialog";

import GlobalDialog from "./GlobalDialog";

export default {
  title: "Components/GlobalDialog",
  component: GlobalDialog,
} as ComponentMeta<typeof GlobalDialog>;

const Template: ComponentStory<typeof GlobalDialog> = (arg) => {
  const { open } = useGlobalDialogActions();
  const handleClick = () => {
    open(arg as DialogProps);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        modal
      </button>
      <GlobalDialog />
    </>
  );
};

export const OneButton = Template.bind({});

OneButton.args = {
  title: "Opps",
  message: "Sorry! Something went wrong.",
  onConfirm: () => {
    console.log("click!");
  },
  showCancel: false,
  cancelText: "No",
  confirmText: "OK",
};

export const TwoButton = Template.bind({});

TwoButton.args = {
  title: "Sign out",
  message: "Do you want to sign out?",
  onConfirm: () => {
    console.log("click!");
  },
  showCancel: true,
  cancelText: "No",
  confirmText: "Yes",
};
