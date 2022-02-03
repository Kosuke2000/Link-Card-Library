import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData, mockOgpData1, mockOgpData2 } from "@/mocks/LinkCard";

import { HatebuStyleLinkCardView } from "./View";

export default {
  title: "Model/LinkCard/HatebuStyle",
  component: HatebuStyleLinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HatebuStyleLinkCardView>;

const Template: ComponentStory<typeof HatebuStyleLinkCardView> = (args) => (
  <HatebuStyleLinkCardView {...args} />
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
