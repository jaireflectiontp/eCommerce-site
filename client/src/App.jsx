import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Account, Cart, Checkout, Contact, ForgotPassword, Home, ProductDetails, Products, SignIn, SignUp, Wishlist } from "./pages";
import RootLayout from "./layouts/RootLayout";
import './App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:slug" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}> </Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );

  return (
    <div className="app"><RouterProvider router={router} /></div>
  )
}

export default App
