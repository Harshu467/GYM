import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
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
            <Join/>
            <Footer/>
          </span>
    </div>
  );
}

export default App;
