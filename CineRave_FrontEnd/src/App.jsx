import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/homePage';
import MoreDetails from './components/moreDetails';
import Login from './pages/login';
import Signup from './pages/signup';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moreDetails/:id" element={<MoreDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
