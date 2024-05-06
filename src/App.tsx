import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from "./components/Home"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]
    )
  return (
      <div>
       <RouterProvider router={appRouter} />
      </div>

  )
}

export default App
