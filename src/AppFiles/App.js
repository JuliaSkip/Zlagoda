
import './App.css';
import Login from '../LoginPage/Login';
import {BrowserRouter, useLocation, Routes, Route, Link} from 'react-router-dom';
import ProductsPage from "../ProductsPage/ProductsPage";
import AddProductPage from "../ProductsPage/AddProductPage";
import EditProductPage from "../ProductsPage/EditProductPage";
import EmployeePage from "../EmployeePage/EmployeePage";
import AddEmployeePage from "../EmployeePage/AddEmployeePage";
import EditEmployeePage from "../EmployeePage/EditEmployeePage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/employees" element={<EmployeePage />} />
            <Route path="/add-employee" element={<AddEmployeePage />} />
            <Route path="/employees/:idempl" element={<EditEmployeePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/products/:id" element={<EditProductPage />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
