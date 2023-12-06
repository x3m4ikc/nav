import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SelectProgram from './Components/SelectProgram/SelectProgram';
import SwitchTemp from './Components/switches/SwitchTemp';
import SwitchAir from './Components/switches/SwitchAir';
import SwitchWater from './Components/switches/SwitchWater';
import SwitchEnergy from './Components/switches/SwitchEnergy';
import Account from './Components/Accont/Accont';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <div className="App">
      <div className='background'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/select' element={<SelectProgram />}/>
        <Route path='/switch-temp' element={<SwitchTemp />}/>
        <Route path='/switch-air' element={<SwitchAir />}/>
        <Route path='/switch-water' element={<SwitchWater />}/>
        <Route path='/switch-energy' element={<SwitchEnergy />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/settings' element={<Settings />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
