import Nav from "./components/nav/nav"

const App = ({children}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <Nav />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default App
