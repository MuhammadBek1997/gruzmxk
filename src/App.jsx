import "./App.css";
import Plus from "../src/pages/Plus.jsx";
import Footer from './pages/footer'
import Truck from './page/Truck'
import Services from './pages/Services.jsx'
import Header from './pages/Header'

function App() {
  return (
    <>
     <Header/>
     <Services/>
     <Truck/>
     <Footer/>
     <Plus />
    </>
  );
}

export default App;
