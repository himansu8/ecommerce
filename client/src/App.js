import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Auth/Login';
import PrivateRoutes from './pages/Auth/PrivateRoutes';
import Dashboard from './pages/user/Dashboard';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoutes from './pages/Auth/AdminRoutes';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import Products from './pages/admin/Products';
import UpdateProducts from './pages/admin/UpdateProducts';

function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard/user" element={<Dashboard />} />
          <Route path="/dashboard/user/profile" element={<Profile />} />
          <Route path="/dashboard/user/orders" element={<Orders />} />

        </Route>


        <Route element={<AdminRoutes />}>
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/create-category" element={<CreateCategory />} />
          <Route path="/dashboard/admin/create-product" element={<CreateProduct />} />
          <Route path="/dashboard/admin/users" element={<Users />} />
          <Route path="/dashboard/admin/products" element={<Products />} />
          <Route path="/dashboard/admin/products/:slug" element={<UpdateProducts />} />
        </Route>

      </Routes>

      <Toaster />
    </>
  );
}

export default App;
