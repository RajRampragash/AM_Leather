
import './App.css';
import Header from './components/header/header';
import { About } from './components/About/about';
import {Products} from './components/product/product'
import { Contactinfo } from './components/contactinfo';




function App() {
  return (
    <div className="App">
   <Header/>
   <About/>
   <Products/>
   <Contactinfo/>
  
    </div>
  );
}

export default App;
