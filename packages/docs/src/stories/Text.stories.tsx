import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: 'md',
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi velit modi! Error unde, voluptate molestias, repellendus soluta doloribus itaque esse, delectus ducimus illum sapiente minus non ullam voluptates. Porro.",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
