import { memo } from 'react';

export const IncrementComponent = memo(({ increment }) => {
  return (
    <button className="btn btn-primary" onClick={() => increment(1)}>
      Incrementar + 1
    </button>
  );
});
