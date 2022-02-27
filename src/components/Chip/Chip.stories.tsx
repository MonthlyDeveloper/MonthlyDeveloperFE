import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "./Chip";

export default {
  title: "Components/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (arg) => <Chip {...arg} />;

const ListTemplate: ComponentStory<typeof Chip> = () => {
  return (
    <div>
      {new Array(5).fill("").map((_, idx) => {
        return <Chip key={`key${idx * 3}`} text={`Sample${idx}`} />;
      })}
    </div>
  );
};

export const Primary = Template.bind({});

export const Long = Template.bind({});
Long.args = {
  text: "Very Very Long Chip",
};

export const Styles = Template.bind({});

Styles.args = {
  text: "Colorful~",
  bgColor: "#66CCFF",
  addStyle: "font-weight: 700",
};

export const Editing = Template.bind({});
Editing.args = {
  text: "Editing!",
  type: "editing",
};

export const List = ListTemplate.bind({});
