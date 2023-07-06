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
import SignIn from "./components/Forms/LoginForm/SignIn";
import SignUp from "./components/Forms/RegistrationForm/SignUp"
import LoginForm from "./components/Forms/LoginForm/Login";
import RegistrationForm from "./components/Forms/RegistrationForm/Register";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homepage />}>
        <Route index element={<Dhasboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
       {/* <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>*/}
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
