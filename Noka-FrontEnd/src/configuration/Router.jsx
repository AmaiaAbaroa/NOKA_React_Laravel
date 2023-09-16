import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuario from "../pages/Register";
import Login from "../pages/Login";
import SignInSuccessPage from "../pages/SignInSuccessPage";



const Router= () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/registro' element={<RegistroUsuario></RegistroUsuario>}></Route>
                <Route path='/registro-exitoso' element={<SignInSuccessPage></SignInSuccessPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;