import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import { TransactionsProvider } from '../hooks/useTransactions';

import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransactionsProvider>
    <Component {...pageProps} />
    <ToastContainer />
    </TransactionsProvider>
    )
}
