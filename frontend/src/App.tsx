import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import LandingPage from './pages/LandingPage/LandingPage'
import SignIn from './pages/SignIn'
import Layout from './components/Layout'
import ResetPassword from './pages/ResetPassword'
import AppLayout from './components/app/index'
import ProtectedRoute from './ProtectedRoute'
import Home from './pages/Home/Home'
import UserProfile from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Layout>
              <ResetPassword />
            </Layout>
          }
        />
        <Route
          path="/app"
          element={
            <ProtectedRoute
              userData={{
                email: 'jf',
              }}
            >
              <AppLayout/>
            </ProtectedRoute>
          }
        >
          <Route path='home' element={<Home/>}/>
          <Route path='profile' element={<UserProfile/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
