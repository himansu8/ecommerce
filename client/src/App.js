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

        <Route element={<PrivateRoutes />}>
<Route path="/dashboard" element={<Dashboard/>} />

        </Route>

      </Routes>

      <Toaster />
    </>
  );
}

export default App;
