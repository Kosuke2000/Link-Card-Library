import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData, mockOgpData1, mockOgpData2 } from "@/mocks/LinkCard";

import { TwitterStyleLinkCardView } from "./View";

export default {
  title: "Model/LinkCard/TwitterStyle",
  component: TwitterStyleLinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TwitterStyleLinkCardView>;

const Template: ComponentStory<typeof TwitterStyleLinkCardView> = (args) => (
  <TwitterStyleLinkCardView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ogp: mockOgpData,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  ogp: mockOgpData2,
};

export const NoOgImgUrl = Template.bind({});
NoOgImgUrl.args = {
  ogp: mockOgpData1,
};
