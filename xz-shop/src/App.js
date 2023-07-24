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
import ContactPage from "./pages/Contact/ContactPage";
import RootLayout from "./components/RootLayout/RootLayout";
import HomePage from "./pages/Home/HomePage";
import ProductDetailsPage from "./pages/ProductDetail/ProductDetailsPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product/:slug" element={<ProductDetailsPage />}></Route>
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
