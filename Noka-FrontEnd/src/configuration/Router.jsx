import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuario from "../pages/Register";
import Login from "../pages/Login";
import SignInSuccessPage from "../pages/SignInSuccessPage";
import HellowLogin from "../pages/HellowLogin";



const Router= () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/login-exitoso' element={<HellowLogin></HellowLogin>}></Route>
                <Route path='/registro' element={<RegistroUsuario></RegistroUsuario>}></Route>
                <Route path='/registro-exitoso' element={<SignInSuccessPage></SignInSuccessPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;