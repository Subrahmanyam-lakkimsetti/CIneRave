import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/homePage';
import MoreDetails from './components/moreDetails';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moreDetails/:id" element={<MoreDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
