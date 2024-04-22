import { Route,Routes } from 'react-router-dom'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './componets/Header'
import Footer from './componets/Footer'

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route element={<Landing/>} path='/'/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<History/>} path='/history'/>

      </Routes>
      <Footer/>


    </>
  )
}

export default App
