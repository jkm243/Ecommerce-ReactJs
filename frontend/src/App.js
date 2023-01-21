import './styles/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/index.js';
import Header from './components/Header'
import Cart from './pages/cart/index'
import Product from './pages/product/index';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import SignIn from './pages/signin/index';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:slug" element={<Product/>}/>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer/>
      <ScrollButton/>
    </Router>
  );
}

export default App;