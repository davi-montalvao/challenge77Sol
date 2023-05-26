
import React from 'react';

import styles from './styles.module.scss';

export interface ButtonProps {
  disabled?: boolean;
  onClick?: (event: React.FormEvent) => Promise<void>;
  children: React.ReactNode;
}

export function Button({ disabled, onClick, children }:ButtonProps) {
  return (
    <button className={`${styles.button} ${disabled ? styles.buttonDisabled : ''}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};



