
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
