import PageIllustration from '../../pages/LandingPage/components/page-illustration'
import Leftbar from './components/LeftBar'
import Navbar from './components/Navbar'
import Rightbar from './components/RightBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <PageIllustration />
        <div>
          <Navbar />
          <div className="md:mx-auto md:grid md:w-10/12 md:grid-cols-4 md:gap-6">
            <Leftbar showLeftbar />
            <div className="md:col-span-2">
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
