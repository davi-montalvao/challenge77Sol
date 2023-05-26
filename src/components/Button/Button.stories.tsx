
import { StoryObj, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../Button/index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta <ButtonProps> ;



export const Default: StoryObj<ButtonProps> = {
  args: {
  children: 'Enviar',
  }
}
