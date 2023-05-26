import { render, screen, waitFor } from '@testing-library/react';
import { Form } from './components/Form';
import { SelectInput } from './components/Select';

import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/image');

describe('App Component', () => {
  it('should render button click', async () => {
    const { getByText } = render(<Form />)
    const addButton = getByText('Enviar')
    userEvent.click(addButton)
  })
});

describe('SelectInput Component', () => {
  const options = [
    { value: '', label: 'Selecione' },
    { value: 'fibrocimento-madeira', label: 'Fibrocimento Madeira' },
    { value: 'fibrocimento-metalico', label: 'Fibrocimento Metálico' },
    { value: 'ceramico', label: 'Cerâmico' },
    { value: 'metalico', label: 'Metálico' },
    { value: 'laje', label: 'Laje' },
    { value: 'solo', label: 'Solo' },
  ];

  it('should render the select component with options', () => {
    const handleChange = jest.fn();
    render(
      <SelectInput id="mySelect" value="" onChange={handleChange} options={options} />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(options.length);
    optionElements.forEach((option, index) => {
      expect(option).toHaveValue(options[index].value);
      expect(option).toHaveTextContent(options[index].label);
    });
  });
  it('should call the onChange function when a different option is selected', async () => {
    const handleChange = jest.fn();
    render(
      <SelectInput id="mySelect" value="" onChange={handleChange} options={options} />
    );
    const selectElement = screen.getByRole('combobox');
    userEvent.selectOptions(selectElement, 'fibrocimento-madeira');
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });
  });
});