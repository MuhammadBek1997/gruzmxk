import "./App.css";
import Plus from "../src/pages/Plus.jsx";
import Footer from './pages/footer'
import Truck from './page/Truck'
import Services from './pages/Services.jsx'
import Header from './pages/Header'
import Aloqa from './pages/Aloqa'

function App() {
  return (
    <>
     <Header/>
     <Services/>
     <Aloqa />
     <Truck/>
     <Footer/>
     <Plus />
    </>
  );
}

export default App;
