import { FaSearch } from 'react-icons/fa';
import './movieList.css';
import { useRef } from 'react';
import { Link } from 'react-router';
const NavBar = () => {
  const inputref = useRef(null);
  return (
    <div className="Nav">
      <div className="left">
        <h1 className="main-title">Cine Rave</h1>
      </div>
      <div className="right">
        <ul>
          <Link to={'/'} className="link">
            <li>Home</li>
          </Link>
          <li>Futured</li>
          <a href="#footer" className="link-about">
            <li>About</li>
          </a>
          <li>
            <Link to="/login">
              <button className="auth">Sigin/Sinup</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
