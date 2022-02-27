import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import ProjectList from "./ProjectList";

export default {
  title: "Components/ProjectList",
  component: ProjectList,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "desktop",
    },
  },
} as ComponentMeta<typeof ProjectList>;

const Template: ComponentStory<typeof ProjectList> = (arg) => (
  <ProjectList {...arg} />
);

export const Desktop = Template.bind({});
export const Tablet = Template.bind({});
export const Mobile = Template.bind({});

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
