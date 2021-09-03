import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricices from './components/Pricices';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About/>
      <Services/>
     <Portfolio/>
     <Pricices/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
