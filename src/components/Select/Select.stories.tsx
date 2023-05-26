import { StoryObj, Meta } from '@storybook/react';
import { SelectInput, SelectInputProps } from '../Select/index';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
} as Meta<SelectInputProps>;


export const Default: StoryObj<SelectInputProps> = {
args: {
  id: 'mySelect',
  onChange: (event) => {
    console.log(event.target.value);
  },
  options: [
    { value: '', label: 'Selecione' },
    { value: 'fibrocimento-madeira', label: 'Fibrocimento Madeira' },
    { value: 'fibrocimento-metalico', label: 'Fibrocimento Metálico' },
    { value: 'ceramico', label: 'Cerâmico' },
    { value: 'metalico', label: 'Metálico' },
    { value: 'laje', label: 'Laje' },
    { value: 'solo', label: 'Solo' },
  ],
  }
}
