
import './App.css';
import AboutMe from './ProtfplioContainer/AboutMe/AboutMe';
import ContactMe from './ProtfplioContainer/ContactMe/ContactMe';
import Footer from './ProtfplioContainer/Footer/Footer';
import Profile from './ProtfplioContainer/Home/Profile';
import Project from './ProtfplioContainer/Projeect/Project';
import Resume from './ProtfplioContainer/Resume/Resume';
import Testimonial from './ProtfplioContainer/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
    <Profile></Profile>
    <AboutMe></AboutMe>
    <ContactMe></ContactMe>
    <Resume></Resume>
    <Testimonial></Testimonial>
    <Project></Project>
    <Footer></Footer>
    </div>
  );
}

export default App;
