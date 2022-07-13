import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Home/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
