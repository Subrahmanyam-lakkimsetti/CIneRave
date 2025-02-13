import { useNavigate } from 'react-router';
import Footer from './footer';
import './login.css';
import NavBar from './navBar';
import { useState } from 'react';
import { Link } from 'react-router';
const Signup = () => {
  const [email, setemail] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setemail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('in submit function');
    try {
      const resp = await fetch(`http://localhost:4007/otps?email=${email}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      });

      const respObj = await resp.json();
      console.log(respObj);
      if (respObj.status === 'failure') {
        alert(respObj.message);
        return;
      }
      navigate('/register');
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
              onChange={(e) => handleChange(e)}
              required
            />
            <button type="submit" className="login-button-main">
              Send otp
            </button>

            <p className="information">
              Already have an account?
              <Link to="/login" className="signup">
                sigin
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
