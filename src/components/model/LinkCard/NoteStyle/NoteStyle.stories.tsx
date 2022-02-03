import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData, mockOgpData1, mockOgpData2 } from "@/mocks/LinkCard";

import { NoteStyleLinkCardView } from "./View";

export default {
  title: "Model/LinkCard/NoteStyle",
  component: NoteStyleLinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NoteStyleLinkCardView>;

const Template: ComponentStory<typeof NoteStyleLinkCardView> = (args) => (
  <NoteStyleLinkCardView {...args} />
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
