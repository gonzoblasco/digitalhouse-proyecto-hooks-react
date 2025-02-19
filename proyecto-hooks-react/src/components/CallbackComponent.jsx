import { useCallback, useState } from 'react';
import { IncrementComponent } from './IncrementComponent';

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementParent = useCallback((value) => {
    setCounter((prevCounter) => prevCounter + value);
  }, []);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <IncrementComponent increment={incrementParent} />
    </>
  );
};
