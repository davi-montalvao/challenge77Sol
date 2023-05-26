
import React, { useEffect, useState } from 'react';
import { ResultsProps, useTransactions } from '../../hooks/useTransactions';

import styles from './styles.module.scss';

export default function Details() {
  const { listResults } = useTransactions()
  const [details, setDetails] = useState<ResultsProps>()

  useEffect(() => {
    setDetails(listResults); 
  }, [listResults]);
  
  function stripHtmlTags(htmlString:string) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(htmlString, 'text/html');
    return parsed.body.textContent;
  }

  return (
    <div className={styles.details}>
      <h1>Detalhes da consulta</h1>
      <p>Potencial: {details?.potencial}</p>
      <p>Valor Instalação: {details?.valor_instalacao?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <h2>Parcelamento:</h2>
      <ul>
        {details?.parcelamento?.map((item, index) => (
          <li key={index}>
            Parcelas: 
            {item.parcelas}, 
            Taxa Mínima: {item.taxa_minina}%, 
            Taxa Máxima: {item.taxa_maxima}%, 
            Valor Mínimo: {item.valor_minimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, 
            Valor Máximo: {item.valor_maximo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
          </li>
        ))}
      </ul>

      <p>CO2: {details?.co2}</p>

      <h2>Kit:</h2>
      <ul>
        {details?.kit?.map((item) => (
          <li key={item.id}>
            <h3>{item.titulo}</h3>
            <p>Quantidade: {item.qtde}</p>
            <p>Valor: {item.valor}</p>
            <p>Categoria: {item.categoria}</p>
            <p>Valor Total: {item?.valueTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Descrição: {stripHtmlTags(item.descricao)}</p>
            {/* <p>Datasheet: {item.datasheet}</p>
            <p>URL: {item.url}</p> */}
            <p>Custo: {item.custo}</p>
            <p>Estimativa de Entrega: {item.estimativaEntrega}</p>
            <p>Fornecedor: {item.fornecedor}</p>
            <p>Garantia: {item.garantia}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
