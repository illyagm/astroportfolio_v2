import React from 'react';
import { useCounterStore } from '@store/counter';
import AppRouter from 'routes/Router';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  const { count, increment } = useCounterStore();

  return (
    <>
      <Analytics />
      <AppRouter />
    </>
  );
};

export default App;
