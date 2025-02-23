import React from 'react';
import styles from './App.module.scss';
import { useCounterStore } from '@store/counter';
import Button from '@components/ui/Button';
import Card from '@components/ui/Card';
import Layout from '@components/layout/Layout';
import AppRouter from 'routes/Router';

const App: React.FC = () => {
  const { count, increment } = useCounterStore();

  return <AppRouter />;
};

export default App;
