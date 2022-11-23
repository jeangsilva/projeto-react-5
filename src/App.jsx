import logo from "./logo.svg";
import "./App.css";
import Myname from "./components/Myname";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./rotas/Home";
import Fotos from "./rotas/Fotos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fotos" element={<Fotos />} />
          </Routes>
        </BrowserRouter>

        <Myname name="Jean Silva" />


      </header>
    </div>
  );
}

export default App;
