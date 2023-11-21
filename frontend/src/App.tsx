import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {

  return (  
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
    
}

export default App
