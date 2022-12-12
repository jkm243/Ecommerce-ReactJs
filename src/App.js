import './styles/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/index.js';
import Header from './components/Header'
import Cart from './pages/cart/index'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;