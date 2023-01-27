import styles from './App.module.css'
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Perfil from "./Paginas/Perfil";
import Proyectos from "./Paginas/Proyectos";
import Contacto from "./Paginas/Contacto";
import Experiencia from "./Paginas/Experiencia";
import lang from './common/language.svg'
import { useState } from "react"; 
import Stack from './Paginas/Stack';

function App() {

  const [language, setLanguage] = useState('spa')
  const [isShowMenu, setIsShowMenu] = useState(false)

  const handleClick = (option) => {
    setLanguage(option)
    setIsShowMenu(false)
  }
  
  return (
    <div className="main">
      <img onClick={() => setIsShowMenu(!isShowMenu)} className={styles.lang} src={lang} alt='change language' />
      <div className={styles.menu} style={{display: isShowMenu ? 'flex' : 'none'}}>
        <span onClick={() => handleClick('spa')} className={styles.option}>Español</span>
        <span onClick={() => handleClick('eng')} className={styles.option}>English</span>
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
