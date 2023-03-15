import './styles/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/index.js';
import Header from './components/Header'
import Cart from './pages/cart/index'
import Product from './pages/product/index';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import SignIn from './pages/signin/index';
import SignUp from './pages/signup';
import ShippingAddressScreen from './pages/shippingAdress';
import PaymentMethod from './pages/paymentMethod';
import PlaceOrderScreen from './pages/placeOrder';
import OrderScreen from './pages/orderScreen';
import OrderHistoryScreen from './pages/orderHistory';
import ProfileScreen from './pages/profileScreen';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index.html" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:slug" element={<Product/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/orderhistory" element={<OrderHistoryScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
      <Footer/>
      <ScrollButton/>
    </Router>
  );
}

export default App;