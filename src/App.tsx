import './App.css'
import Homepage from './pages/Homepage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import CreatosPage from './pages/CreatosPage';
import Footer from './components/Footer';
import CollectionsPage from './pages/CollectionsPage';
import BiddingPage from './pages/BiddingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/creators' element={<CreatosPage/>}/>
            <Route path='/collections' element={<CollectionsPage/>}/>
            <Route path='/bidding' element={<BiddingPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/user' element={<UserProfilePage/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App