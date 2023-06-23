import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dhasboard from "./components/Dhasboard";
import Cart from "./components/Cart";
import Homepage from "./components/Homepage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homepage />}>
        <Route index element={<Dhasboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
