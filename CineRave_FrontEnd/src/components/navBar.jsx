import { FaSearch } from 'react-icons/fa';
import './movieList.css';
import { useRef } from 'react';
import { Link } from 'react-router';
const NavBar = () => {
  const inputref = useRef(null);

  const handleFocus = () => {
    inputref.current.focus();
  };
  return (
    <div className="Nav">
      <div className="left">
        <h1 className="main-title">Cine Rave</h1>
      </div>
      <div className="right">
        {/* <div className="search">
          <input ref={inputref} placeholder="Search" className="search-box" />
          <button onClick={handleFocus} className="search-button">
            <FaSearch />
          </button>
        </div> */}
        <ul>
          <Link to={'/'} className="link">
            <li>Home</li>
          </Link>
          <li>Futured</li>
          <li>About</li>
          <li>
            <button className="auth">Sigin/Sinup</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
