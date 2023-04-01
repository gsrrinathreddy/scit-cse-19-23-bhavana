import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Aboutme from './pages/Aboutme';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Achievements from './pages/Achievements';

import Skills from './pages/Skills';
import Certifications from './pages/Certifications';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path= '/Home' element={<Home/>}/>
      <Route path= '/Aboutme' element={<Aboutme/>}/>
      <Route path= '/Qualifications' element={<Qualifications/>}/>
      <Route path= '/Experience' element={<Experience/>}/>
      <Route path= '/Hobbies' element={<Hobbies/>}/>
      <Route path= '/Achievements' element={<Achievements/>}/>
      <Route path= '/Certifications' element={<Certifications/>}/>
      <Route path= '/Skills' element={<Skills/>}/>
     </Routes>
      
    </div>
  );
}

export default App;

