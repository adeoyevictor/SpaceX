import React, { useContext, ChangeEvent } from 'react';
import UserContext from '../../context/UserContext';

const LoginForm: React.FC = () => {
  const contextValue = useContext(UserContext);

  const formData = contextValue?.formData || { email: '', password: '' };
  const setFormData = contextValue?.setFormData;
  const handleFormSubmit = contextValue?.handleFormSubmit;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setFormData) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="login__page__form">
      <div className="container">
        <h4>Login to your dashboard</h4>
        <p>Provide details to log in to your account</p>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
