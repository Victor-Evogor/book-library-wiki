import { FunctionComponent, PropsWithChildren } from "react"
import Header from "../pages/LandingPage/components/ui/header"
import PageIllustration from "../pages/LandingPage/components/page-illustration"

const Layout:FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
      <PageIllustration />
        {children}
      </main>
    </div>
  )
}

export default Layout
