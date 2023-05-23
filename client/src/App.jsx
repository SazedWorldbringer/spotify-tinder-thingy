import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Matches from './pages/match.jsx'
import ErrorPage from './pages/error.jsx'
import Layout from './layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/match",
        element: <Matches />,
      }
    ]
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
