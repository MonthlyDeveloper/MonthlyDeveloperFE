/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg} />;

export const PrimaryEnable = Template.bind({});
PrimaryEnable.args = {
  content: "Primary Button",
  btnTheme: "primary",
  disable: false,
  handleClick: () => alert("Primary click!"),
};

export const PrimaryDisable = Template.bind({});
PrimaryDisable.args = {
  content: "Primary Button",
  btnTheme: "primary",
  disable: true,
  handleClick: () => alert("Primary click!"),
};

export const SecondaryEnable = Template.bind({});
SecondaryEnable.args = {
  content: "Secondary Button",
  btnTheme: "secondary",
  disable: false,
  handleClick: () => alert("Secondary click!"),
};

export const SecondaryDisable = Template.bind({});
SecondaryDisable.args = {
  content: "Secondary Button",
  btnTheme: "secondary",
  disable: true,
  handleClick: () => alert("Secondary click!"),
};
