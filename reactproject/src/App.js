import router from "./router/router"
import {RouterProvider} from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div className="App">
      {/* 路由绑定 */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
