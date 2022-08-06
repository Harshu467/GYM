import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Program from './Components/Programs/Program';
import Reason from './Components/Reasons/Reason';
function App() {
  return (
    <div className="App">
          <span style={{color: 'white'}}>
            <Hero/>
            <Program/>
            <Reason/>
            <Plans/>
          </span>
    </div>
  );
}

export default App;
