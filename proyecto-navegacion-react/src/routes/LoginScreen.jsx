import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const initialState = {
    name: '',
    technology: '',
    email: '',
    networks: '',
  };

  const { name, technology, email, networks, onInputChange, onResetForm } =
    useForm(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !technology || !email || !networks) {
      return;
    }

    setUser({
      name,
      technology,
      email,
      networks,
    });

    onResetForm();
  };

  return (
    <form className='container mt-5' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='name'
          name='name'
          value={name}
          onChange={onInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='technology' className='form-label'>
          Technology
        </label>
        <input
          type='text'
          className='form-control'
          id='technology'
          name='technology'
          value={technology}
          onChange={onInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='networks' className='form-label'>
          Networks
        </label>
        <input
          type='text'
          className='form-control'
          id='networks'
          name='networks'
          value={networks}
          onChange={onInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Entrar
      </button>
      <button
        type='button'
        className='btn btn-danger mx-3'
        onClick={onResetForm}
      >
        Limpiar
      </button>
    </form>
  );
};
