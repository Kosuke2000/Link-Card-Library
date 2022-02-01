import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData2 } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export default {
  title: "Model/LinkCard/NotionStyle",
  component: LinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCardView>;

const Small: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-sm border-2">
    <LinkCardView {...args} />
  </div>
);

const Medium: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-md border-2">
    <LinkCardView {...args} />
  </div>
);

const Large: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-6xl border-2">
    <LinkCardView {...args} />
  </div>
);

export const Mobile = Small.bind({});
Mobile.args = {
  ogp: mockOgpData2,
};

export const Tablet = Medium.bind({});
Tablet.args = {
  ogp: mockOgpData2,
};

export const Desktop = Large.bind({});
Desktop.args = {
  ogp: mockOgpData2,
};
