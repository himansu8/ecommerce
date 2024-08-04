import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';

function App() {
  return (
    < >
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/policy" element={<Policy/>} />
<Route path="*" element={<PageNotFound/>} />

<Route path="/register" element={<Register/>} />


</Routes>
    </>
  );
}

export default App;
