
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Services from './components/Services'
import NotFound from './pages/NotFound.jsx'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/work" element={<Work/>} /> 
        <Route path="/service" element={<Services/>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
       
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
