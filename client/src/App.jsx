import Footer from "./components/footer/footer"
import Nav from "./components/nav/nav"

const App = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <Nav />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default App
