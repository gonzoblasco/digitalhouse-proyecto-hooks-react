import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormValues(initialState);
  };

  return {
    ...formValues,
    formValues,
    onInputChange,
    onResetForm,
  };
};
