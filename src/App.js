import styles from './App.module.css'
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Perfil from "./Paginas/Perfil";
import Proyectos from "./Paginas/Proyectos";
import Contacto from "./Paginas/Contacto";
import Experiencia from "./Paginas/Experiencia";
import { useState } from "react"; 
import Stack from './Paginas/Stack';

function App() {

  const [language, setLanguage] = useState('spa')
  
  return (
    <div className="main">
      <div className={styles.menu}>
        <span onClick={() => setLanguage('spa')} className={styles.option}>Es</span>
        <span onClick={() => setLanguage('eng')} className={styles.option}>En</span>
      </div>
      <Navbar lang={language} />
      <Routes>  
        <Route path='/' element={<Perfil lang={language} />} />
        <Route path='/experiencia' element={<Experiencia lang={language} />} />
        <Route path='/proyectos' element={<Proyectos lang={language} />} />
        <Route path='/contacto' element={<Contacto lang={language} />} />
        <Route path='/stack' element={<Stack />} />
      </Routes>
    </div>
  );
}

export default App;
