import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Introsec/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
// import Services from "./Components/Services/Services";
import Contact from "./Components/Contacts/Contact";


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
  
    </div>
  );
}

export default App;
