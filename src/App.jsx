import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import CrearMenu from './pages/menus/creaMenu/CrearMenu';
import Slider from '/src/pages/slider/Slider';
import Menu from '/src/pages/home/Menu';
import Login from '/src/pages/login/Login';
import VerMenu from '/src/pages/menus/verMenu/VerMenu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crear-menu" element={<CrearMenu />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path='/menu/:idmenu' element={<VerMenu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
           
      {/*<div >
        <h1 style={{ color: '#c09e06' }}> Milos Resto and Bar</h1>
        <img src="/img/logo.png" alt="resto" width="80%" height="300px" />
      </div>*/}
    </>
  )
}

export default App;
