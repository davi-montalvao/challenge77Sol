import React from 'react';

import styles from './styles.module.scss';

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  maxLength?: number;
  placeholder: string;
  id: string;
}

export function Input({ id, placeholder, value, onChange, type, maxLength }:InputProps) {

  return (
    <input
     id={id}
     placeholder={placeholder}
     type={type} 
     value={value} 
     onChange={onChange} 
     className={styles.input}
     maxLength={maxLength}
   />
  );
};

