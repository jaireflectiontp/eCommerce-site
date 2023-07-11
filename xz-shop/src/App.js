import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./forms/LoginForm/Login";
import RegistrationForm from "./forms/RegistrationForm/Register";
import CartPage from "./pages/Cart/CartPage";
import HomePage from "./pages/Home/HomePage";
import Dhasboard from "./components/Dhasboard";
import ContactPage from "./pages/Contact/ContactPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route index element={<Dhasboard />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/signup" element={< RegistrationForm />}></Route>
        <Route path="/signin" element={<LoginForm />}></Route>
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
