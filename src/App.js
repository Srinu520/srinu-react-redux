import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
