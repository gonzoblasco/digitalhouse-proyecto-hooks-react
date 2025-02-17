import { CounterApp } from './components/CounterApp.jsx';
import { FormApp } from './components/FormApp.jsx';
import { FetchApp } from './components/FetchApp.jsx';

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicación de Hooks</h1>
      <hr />
      <CounterApp />
      <hr />
      <FormApp />
      <hr />
      <FetchApp />
    </>
  );
};
