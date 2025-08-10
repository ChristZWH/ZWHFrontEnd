import Chat from "../pages/Chat/Chat"
import Home from "../pages/Home/Home"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/chat",
    element: <Chat />
  },
]
)

export default router
