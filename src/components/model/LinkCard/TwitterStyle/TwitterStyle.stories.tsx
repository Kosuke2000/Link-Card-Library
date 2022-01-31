import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData2 } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export default {
  title: "Model/LinkCard/TwitterStyle",
  component: LinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCardView>;

const Template: ComponentStory<typeof LinkCardView> = (args) => (
  <LinkCardView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ogp: mockOgpData2,
};
