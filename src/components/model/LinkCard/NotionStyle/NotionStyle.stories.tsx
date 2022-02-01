import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export default {
  title: "Model/LinkCard/NotionStyle",
  component: LinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCardView>;

const Small: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-sm">
    <LinkCardView {...args} />
  </div>
);

const Medium: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-md">
    <LinkCardView {...args} />
  </div>
);

const Large: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-6xl">
    <LinkCardView {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {
  ogp: mockOgpData,
};

export const Tablet = Medium.bind({});
Tablet.args = {
  ogp: mockOgpData,
};

export const Desktop = Large.bind({});
Desktop.args = {
  ogp: mockOgpData,
};
