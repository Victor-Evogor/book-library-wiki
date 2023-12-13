import { useSelector } from 'react-redux'
import PageIllustration from '../../pages/LandingPage/components/page-illustration'
import Leftbar from './components/LeftBar'
import Navbar from './components/Navbar'
import Rightbar from './components/RightBar'
import { Outlet } from 'react-router-dom'
import { Store } from '../../redux/Store'
import useCreateDispatcher from '../../redux/useCreateDispatcher'
import EditProfile from '../../pages/Profile/components/EditProfile'
import CreateWiki from '../CreateWiki'


const getModalToDisplay = (id: string) => {
  switch (id) {
    case 'edit-profile':
      return <EditProfile />

    case 'create-wiki':
      return (
          <CreateWiki/>
      )
  }
  return <></>
}

const Layout = () => {
  const isModalOpen = useSelector<Store, boolean>((state) => state.isModalOpen)
  const dispatch = useCreateDispatcher()
  const modalContent = useSelector<Store, string | null>(
    (state) => state.modalContent
  )

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
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
      {isModalOpen ? (
        <div
          className="absolute w-screen h-screen bg-gray-950 bg-opacity-60 z-40 text-black grid place-items-center"
          onClick={() => {
            dispatch({ type: 'is-modal-open/toggle', payload: !isModalOpen })
          }}
        >
          <div
            className="bg-slate-200 p-6 rounded-lg"
            onClickCapture={(e) => {
              e.stopPropagation()
            }}
          >
            {getModalToDisplay(modalContent as string)}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Layout
