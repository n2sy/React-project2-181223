import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCv from './pages/AllCv';
import Home from './components/Home';
import Infos from './components/Infos';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cv' element={<AllCv></AllCv>}></Route>
        <Route path='/cv/:id' element={<Infos></Infos>}></Route>
      </Routes>
    </div>

  );
}

export default App;
