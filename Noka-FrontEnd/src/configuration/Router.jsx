import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Landingpage from "../pages/Landingpage/Landingpage";
import RegistroUsuario from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import SignInSuccessPage from "../pages/SignInSucces/SignInSuccessPage";
import UserProfile from "../pages/UserProfile/UserProfile";
import Consultation from "../pages/Consultation/Consultation";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
          <Route path="/registro" element={<RegistroUsuario></RegistroUsuario>}></Route>
          <Route path="/registro-exitoso" element={<SignInSuccessPage></SignInSuccessPage>}></Route>
          <Route path="/consultas" element={<Consultation></Consultation>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
