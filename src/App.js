
import './App.css';
import Appbar from './components/mui/appbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'

import Home2 from './pages/home2'
import Home3 from './pages/home3'
import Smarthome from './pages/smarthome'
import Solar from './pages/solar'
import Industrial from './pages/industrial';
import Asset from './pages/asset'
import Digital from './pages/digital'

function App() {
  return (
   <>
   <Appbar/>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='Smart-Preventive-Maintenance' element={<Home2/>} />
      <Route path='Smart-Energy-Management' element={<Home3/>} />
      <Route path='Smart-Home-Automation' element={<Smarthome/>} />
      <Route path='Solar-Monitoring-System' element={<Solar/>} />
      <Route path='Smart-Industrial-Monitoring' element={<Industrial/>} />
      <Route path='Smart-Asset-Management' element={<Asset/>} />
      <Route path='Digital-Manufacturing-Excellence' element={<Digital/>} />
      
    </Routes>
    </BrowserRouter>
    
   </>
  );
}

export default App;
