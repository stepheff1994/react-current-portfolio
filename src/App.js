import logo from './logo.svg';
import './App.css';
import Home from "./pages/home"
import Header from "./components/header"
import Footer from "./components/footer"
import Contact from "./pages/contact"

function App() {
  return (
    <div className="App">
      <Header/>
      {
        window.location.pathname.includes("/home") ?  <Home/>:
        window.location.pathname.includes("/contact") ? <Contact/>:
        <Home/>
      }
     
      <Footer/>
    </div>
  );
}

export default App;
