import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/homePage';
import MoreDetails from './components/moreDetails';
import Login from './components/login';
import Signup from './components/signup';
import Register from './components/register';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moreDetails/:id" element={<MoreDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
