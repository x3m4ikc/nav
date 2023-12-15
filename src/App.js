import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SelectProgram from './pages/SelectProgram/SelectProgram';
import SwitchTemp from './pages/switches/SwitchTemp';
import SwitchEnergy from './pages/switches/SwitchEnergy';
import SwitchAir from './pages/switches/SwitchAir';
import SwitchWater from './pages/switches/SwitchWater';
import Account from './pages/Accont/Accont';
import Settings from './pages/Settings/Settings';
import { SubmenuProvider } from './utils/SubmenuProvider';

function App() {
  return (
    <SubmenuProvider>
        <div className="App">
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
    </SubmenuProvider>
  );
}

export default App;
