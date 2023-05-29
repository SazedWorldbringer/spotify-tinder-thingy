import { Outlet } from "react-router-dom"
import Footer from "./components/footer/footer"
import Nav from "./components/nav/nav"

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background/30 backdrop-blur-sm">
        <Nav />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
