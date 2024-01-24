
import './App.css';
import Header from './components/header/header';
import { About } from './components/About/about';
import {Products} from './components/product/product'
import Contact from './components/Contact/contact';




function App() {
  return (
    <div className="App">
   <Header/>
   <About/>
   <Products/>
   <Contact/>
  
    </div>
  );
}

export default App;
