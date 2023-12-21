import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AllCv from './pages/AllCv';
import Home from './components/Home';
import Infos from './components/Infos';
import Navbar from './components/Navbar';
import AddCv from './pages/AddCv';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cv' element={<AllCv></AllCv>}></Route>
        <Route path='/cv/:id' element={<Infos></Infos>}></Route>
        <Route path='/cv/add' element={<AddCv></AddCv>}></Route>
        <Route path='not-found' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<Navigate to="not-found"></Navigate>}></Route>
      </Routes>
    </div>

  );
}

export default App;
