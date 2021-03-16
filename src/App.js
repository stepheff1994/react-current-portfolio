import logo from './logo.svg';
import {BrowserRouter,Route} from  "react-router-dom"
import './App.css';
import Home from "./pages/home"
import Header from "./components/header"
import Footer from "./components/footer"
import Contact from "./pages/contact"
import About from "./pages/about"
import Current from "./pages/current"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Route path= "/" component = {Home} exact/>
      <Route path= "/about" component = {About}/>
      <Route path= "/current" component = {Current}/>
      <Route path= "/contact" component = {Contact}/>

      
        
      
     
     
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
