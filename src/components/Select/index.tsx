import React from 'react';

import styles from './styles.module.scss';

export interface SelectInputProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

export function SelectInput({ id, value, onChange, options }:SelectInputProps) {
  return (
    <select id={id} value={value} onChange={onChange} className={styles.select}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
