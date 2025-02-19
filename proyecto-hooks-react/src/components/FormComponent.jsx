import { useForm } from '../hooks/useForm.js';
import { useEffect, useRef } from 'react';

export const FormComponent = () => {
  const initialForm = {
    username: '',
    email: '',
    password: '',
  };

  const { formState, onInputChange } = useForm(initialForm);

  const { username, email, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          User Name
        </label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
