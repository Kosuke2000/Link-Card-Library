import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData2 } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export default {
  title: "Model/LinkCard/ZennStyle",
  component: LinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCardView>;

const Template: ComponentStory<typeof LinkCardView> = (args) => (
  <LinkCardView {...args} />
);

const MobileTemplate: ComponentStory<typeof LinkCardView> = (args) => (
  <div className="max-w-sm">
    <LinkCardView {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ogp: mockOgpData2,
};

export const Mobile = MobileTemplate.bind({});
Mobile.args = {
  ogp: mockOgpData2,
};
