import { ReactNode, createContext, useContext, useState } from 'react';
import { api } from '../services/api';

export interface Parcelamento {
  parcelas: number;
  taxa_minina: number;
  taxa_maxima: number;
  valor_minimo: number;
  valor_maximo: number;
}

export interface KitItem {
  id: number;
  qtde: number;
  valor: number;
  categoria: number;
  valueTotal: number;
  descricao: string;
  datasheet: string;
  url: string;
  titulo: string;
  custo: number;
  estimativaEntrega: number | null;
  fornecedor: number;
  garantia: number | null;
  potenciaModulo?: number;
  potenciaInversor?: number;
}

export interface ResultsProps {
  irradiancia: number;
  irradiancia_minima: number;
  irradiancia_maxima: number;
  integradores_regiao: number;
  integradores_minimo: number;
  integradores_maximo: number;
  economia: number;
  potencial: string;
  valor_instalacao: number;
  parcelamento: Parcelamento[];
  co2: number;
  kit: KitItem[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  listResults: ResultsProps;
  getResult: (
    zipCode: string, 
    roofStructure: string, 
    electricityBillValue: string, 
  ) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [listResults, setListResults] = useState<ResultsProps>({} as ResultsProps);

  async function getResult(
    zipCode: string, 
    roofStructure: string, 
    electricityBillValue: string, 
  ) {
    const response = await api.get(`/busca-cep/?estrutura=${roofStructure}&valor_conta=${electricityBillValue}&cep=${zipCode}`);
    setListResults(response.data);
  }

  return (
    <TransactionsContext.Provider value={{ getResult, listResults }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
