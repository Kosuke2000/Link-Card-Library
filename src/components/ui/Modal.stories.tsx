import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Modal } from "./Modal";

export default {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    close: { action: "clicked" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Notion Style",
  code: "",
};
