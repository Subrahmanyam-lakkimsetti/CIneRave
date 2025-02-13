import NavBar from './navBar';
import './login.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Footer from './footer';
const Login = () => {
  const [login, setlogin] = useState({});
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setlogin((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // console.log(login);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch('http://localhost:4007/users/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
          'content-type': 'application/json',
        },
      });
      const respObj = await resp.json();
      if (respObj.status === 'fail') {
        alert(respObj.message);
        return;
      }
      alert('login sucessfully');
      navigate('/');
    } catch (error) {
      console.log('error in login', error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="main-content">
        <div className="login-form">
          <form onSubmit={handleLogin} className="form-details-login">
            <h1 className="login-heading">Login</h1>
            <label>Email</label>
            <input
              className="input-details"
              type="email"
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Email"
            />
            <label>Password</label>
            <input
              className="input-details"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <button className="login-button-main">Log in</button>

            <p className="information">
              Don't have an account?
              <Link to="/signup" className="signup">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
