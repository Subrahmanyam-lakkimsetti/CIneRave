import { useState } from 'react';
import NavBar from './navBar';
import Footer from './footer';
import { useNavigate } from 'react-router';

const Register = () => {
  const [details, setdetails] = useState({});
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setdetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log(details);

  const handleSubmit = async (e) => {
    try {
      console.log('hello');
      e.preventDefault();
      const resp = await fetch('http://localhost:4007/users/register', {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
          'content-type': 'application/json',
        },
      });
      const respObj = await resp.json();
      
      if (respObj.status === 'fail') {
        alert(respObj.message);
        return;
      }
      navigate('/');
      setdetails({ email: '', otp: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="main-content">
        <div className="login-form">
          <form onSubmit={handleSubmit} className="form-details-login">
            <h1 className="login-heading">Signup</h1>
            <label>Email</label>
            <input
              className="input-details"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />

            <label>Enter otp</label>
            <input
              className="input-details"
              type="number"
              name="otp"
              placeholder="Enter otp"
              onChange={(e) => handleChange('otp', e.target.value)}
              required
            />

            <label>Password</label>
            <input
              className="input-details"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => handleChange('password', e.target.value)}
              required
            />

            <button className="login-button-main">Conform</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
