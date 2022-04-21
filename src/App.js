import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import NewProduct from './components/NewProduct.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/new' element={<NewProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
