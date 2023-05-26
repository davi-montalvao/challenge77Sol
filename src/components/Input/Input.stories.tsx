import { StoryObj, Meta } from '@storybook/react';
import { Input, InputProps } from '../Input/index';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
  args: {
    value: '05763-390',
    type: 'text',
    maxLength: undefined,
    onChange: (event) => {
    console.log(event.target.value);
  }
}
};

export const NumberInput: StoryObj<InputProps> = {
  args:  {
  value: '12346789',
  type: 'number',
  maxLength: undefined,
  onChange: (event) => {
    console.log(event.target.value);
  },
}}




