import React, { useState } from 'react';
import Image from 'next/image'
import logo from '../../assets/logo.png'

import { Loading } from '../Loading';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { options } from '../../utils/options';
import { useTransactions } from '../../hooks/useTransactions';

import { SelectInput } from '../Select';
import { Button } from '../Button';
import { Input } from '../Input';

import styles from './styles.module.scss';

export function Form() {
  const [zipCode, setZipCode] = useState('');
  const [roofStructure, setRoofStructure] = useState('');
  const [electricityBillValue, setElectricityBillValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const { getResult } = useTransactions()

  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoofStructure(event.target.value);
  };

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true)
      await getResult(zipCode, roofStructure, electricityBillValue )
      setIsLoading(false)
      router.push('/Details');
      toast.success("Consulta realizada com sucesso!");
    } catch (error) {
      toast.error("Erro ao consultar a consulta, verifique os campos digitados!");
      console.error(error);
      setIsLoading(false)
    }
    
    setZipCode ('')
    setRoofStructure ('')
    setElectricityBillValue ('')
  };

  const isFormValid = zipCode !== '' && roofStructure !== '' && electricityBillValue !== '';

  return (
    <>
    {isLoading ?
      <>
      <Loading />
      <p className={styles.titleWaiting}>Aguarde, essa operação pode levar alguns segundos...</p>
      </>
      : (
        <>
          <div className={styles.container}>
            <Image className={styles.picture} src={logo} alt="logo77soltech" />   
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="zipCode" className={styles.label}> CEP: </label>
              <Input id="zipCode" placeholder="Cep" type="string" maxLength={9} value={zipCode} onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setZipCode(event.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="roofStructure" className={styles.label}> Tipo de estrutura de telhado:</label>
              <SelectInput id="roofStructure" value={roofStructure} onChange={handleSelectChange} options={options} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="electricityBillValue" className={styles.label}> Valor da conta de luz:</label>
              <Input id="electricityBillValue" placeholder="Valor da conta de luz" type="number" maxLength={9} value={electricityBillValue} onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setElectricityBillValue(event.target.value)} />
            </div>
            <Button  disabled={!isFormValid} onClick={handleSubmit}>
              Enviar
            </Button>
          </form>
        </>
      )  
  }
    </>
  );
};

