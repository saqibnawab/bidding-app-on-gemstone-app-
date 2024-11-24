import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Howtobid from './pages/Howtobid'
import Howtosell from './pages/Howtosell';
import Auctionfooter from './components/Auctionfooter';
import Auctioncontact from './pages/Auctioncontact';
import Listingpage from './pages/Listingpage';
import Auctiondetailpage from './pages/Auctiondetailpage';
import Auctionblog from './pages/Auctionblog';
import Blogdetailpage from './pages/Blogdetailpage';
import Auctionwishlist from './pages/Auctionwishlist';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeaklyAuctiondetail from './pages/WeaklyAuctiondetail';
import Registration from './pages/Registration';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/listingpage' element={<Listingpage />} />
        <Route path='/auctiondetail/:id' element={<Auctiondetailpage />} />
        <Route path='/contact' element={<Auctioncontact />} />
        <Route path='/blog' element={<Auctionblog />} />
        <Route path="/blogdetailpage/:id" element={<Blogdetailpage />} />
        <Route path="/weaklyoffer/:id" element={<WeaklyAuctiondetail />} />
        <Route path="/wishlist" element={<Auctionwishlist />} />
        <Route path='/howtobid' element={<Howtobid />} />
        <Route path='/howtosell' element={<Howtosell />} />
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>

      </Routes>
      <Auctionfooter />
      <ToastContainer />
    </>
  );
}

export default App;
