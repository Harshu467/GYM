import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Program from './Components/Programs/Program';
import Reason from './Components/Reasons/Reason';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <span style={{color: 'white'}}>
            <Hero/>
            <Program/>
            <Reason/>
            <Plans/>
            <Testimonials/>
          </span>
    </div>
  );
}

export default App;
