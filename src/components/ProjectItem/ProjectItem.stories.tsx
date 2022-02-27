import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProjectItem from "./ProjectItem";

export default {
  title: "Components/ProjectItem",
  component: ProjectItem,
} as ComponentMeta<typeof ProjectItem>;

const Template: ComponentStory<typeof ProjectItem> = (arg) => (
  <ProjectItem {...arg} />
);

export const Basic = Template.bind({});
