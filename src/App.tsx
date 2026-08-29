import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Setnja from './pages/Setnja'
import Biciklizam from './pages/Biciklizam'
import Galerija from './pages/Galerija' 
import Vreme from './pages/Vreme'
import Profil from './pages/Profil'
import Login from './pages/Login'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import {
  Routes,
  Route,
  BrowserRouter
} from"react-router-dom";
import StazaDetalji from './pages/StazaDetalji'


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
            <Route element={<Layout />}>

              <Route path="/" element={<Home />}/>
              <Route path="/setnja" element={<Setnja />} />
              <Route path="/biciklizam" element={<Biciklizam />} />
              <Route path="/staza/:id" element={<StazaDetalji />} />
              <Route path="/galerija" element={<Galerija />} />
              <Route path="/vreme" element={<Vreme />} />
              <Route path='/profil' element={<Profil />}/>

            </Route>

            <Route path='/login' element={<Login />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App
