import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/inicio';
import Estrategia from './components/Estrategia/Estrategias';
import Creatu11 from './components/Crea tu 11/Creatu11';
import Noticias from './components/Noticias/Noticias';
import Favoritos from './components/Favoritos/Favoritos';
import InicioSesion from './components/Inicio Sesion/IniciarSesion';
import Registro from './components/registro/Registro';
import Pagina404 from './components/404/404';
import {AuthProvider} from './context/authContext';
import InicioConUser from './components/Inicio/inicioConUser';
import { ProtectedRoute } from './components/ProtectedRoute';
/* Autores: 
  Miguel Angel Sanchez Paez
  Juan Manuel Garcia
  Juan Rojas

*/
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Inicio/>} />
          <Route path='/Iniciado' element={<ProtectedRoute><InicioConUser/></ProtectedRoute>} />
        <Route path='/Estrategia' element={<Estrategia/>} />
        <Route path='/Creatu11' element={<Creatu11/>} />
        <Route path='/Noticias' element={<Noticias/>} />
        <Route path='/Favoritos' element={<Favoritos/>} />
        <Route path='/InicioSesion' element={<InicioSesion/>} />
        <Route path='/Registro' element={<Registro/>} />
        <Route path='/*' element={<Pagina404/>} />
      </Routes>
    </AuthProvider>
  );
}


export default App;