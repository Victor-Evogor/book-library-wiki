import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import LandingPage from './pages/LandingPage/LandingPage'
import SignIn from './pages/SignIn'

function App() {

  return (  
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </Router>
  )
    
}

export default App
