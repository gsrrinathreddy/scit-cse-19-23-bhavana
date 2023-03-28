import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';

import Aboutme from './pages/Aboutme';
import Qualifications from './pages/Qualifications';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path= '/Home' element={<Home/>}/>
      <Route path= '/Aboutme' element={<Aboutme/>}/>
      <Route path= '/Qualifications' element={<Qualifications/>}/>
      
     </Routes>
      
    </div>
  );
}

export default App;
