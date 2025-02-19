import { useState, useMemo } from 'react';

export const CalculoPesadoApp = () => {
  const [show, setShow] = useState(true);
  const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);

  const getMultiplication = (numList) => {
    console.log('Realizando cálculos pesados...');
    return numList.reduce((acc, num) => acc * num, 1);
  };

  const memoizedCalculation = useMemo(
    () => getMultiplication(numList),
    [numList],
  );

  return (
    <>
      <h2>Calculos:</h2>
      {show && <h4>El cálculo es: {memoizedCalculation}</h4>}

      <button className="btn btn-light" onClick={() => setShow(!show)}>
        {show ? 'Ocultar Cálculo' : 'Mostrar Cálculo'}
      </button>
      {show && <div>{memoizedCalculation}</div>}
    </>
  );
};
