import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Tooltip } from "./Tooltip";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {};
