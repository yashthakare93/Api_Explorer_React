import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'; 
import APILab from './pages/APILab'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/APILab" element={<APILab />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
