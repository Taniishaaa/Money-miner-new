import React, { useState } from 'react';
import './Signup.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation and API call)
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <div className="logo-container">
          
        </div>
        <h1 className="welcome-title">Welcome to Our Platform</h1>
        <p className="description">Sign up to create a new account</p>
        <div className="decorative-img-container">
          <img aria-hidden="true" alt="decorative shapes" src="https://openui.fly.dev/openui/24x24.svg?text=🔵" />
        </div>
      </div>
      <div className="right-panel">
        <h2 className="sign-up-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="sign-up-btn">Create Account</button>
        </form>
        <p className="social-sign-up">or Sign Up with Social Media</p>
        <div className="social-buttons">
          <button className="social-btn twitter-btn">Sign Up With Twitter</button>
          <button className="social-btn facebook-btn">Sign Up With Facebook</button>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
