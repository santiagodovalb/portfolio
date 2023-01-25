import Navbar from "./Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Perfil from "./Paginas/Perfil";
import Proyectos from "./Paginas/Proyectos";
import Contacto from "./Paginas/Contacto";
import Experiencia from "./Paginas/Experiencia";

function App() {

  return (
    <div className="main">
      <Navbar />
      <Routes>  
        <Route path='/' element={<Perfil />} />
        <Route path='/experiencia' element={<Experiencia />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
