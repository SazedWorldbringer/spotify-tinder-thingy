import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import ErrorPage from './pages/error.jsx'
import Matches from './pages/match.jsx'
import InboxPage from './pages/inbox.jsx'
import YouPage from './pages/you.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/match",
        element: <Matches />,
      },
      {
        path: "/inbox",
        element: <InboxPage />
      },
      {
        path: "/you",
        element: <YouPage />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
