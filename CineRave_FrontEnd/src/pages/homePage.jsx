import MoviesList from '../components/moviesList';
import NavBar from '../components/navBar';

const HomePage = ({ User, handleLogout }) => {
  return (
    <>
      <NavBar User={User} handleLogout={handleLogout} />
      <MoviesList />
    </>
  );
};

export default HomePage;
