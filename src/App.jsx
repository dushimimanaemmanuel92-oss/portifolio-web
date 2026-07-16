import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/skills';
import Projects from './components/project';
import Footer from './components/Footer';
import Contact from './components/contact';
import './App.css'

function App() {
  return (
    <>
<div className=" bg-gradient-to-b from-[#1b1430] via-[#24193e] to-[#100d18] min-h-screen">
  <Navbar />
<Home />
<Skills />
<Projects/>
<Contact />
<Footer />

</div>
    </>
  )
}

export default App
