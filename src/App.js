import './App.css';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='p-[20px]'>
      
      {/* Navbar */}
         <NavBar/>

      {/* Intro */}
         <Home/>

      {/* About Me */}
         <AboutMe/>

      {/* Skills */}
         <Skills/>

      {/* Portfolio */}
         <Portfolio/>

      {/* Campanies */}
         <Companies/>

      {/* Contact Us */}
         <ContactUs/>

      {/* Footer */}
         <Footer/>
    </div>
  );
}

export default App;
