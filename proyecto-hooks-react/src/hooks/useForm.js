import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
