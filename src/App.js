import './App.css';
import Hero from './Components/Hero/Hero';
import Program from './Components/Programs/Program';
function App() {
  return (
    <div className="App">
          <span style={{color: 'white'}}>
            <Hero/>
            <Program/>
          </span>
    </div>
  );
}

export default App;
