import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuario from "../pages/Register";
import SignInSuccessPage from "../pages/SignInSuccessPage";



const Router= () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path='/registro' element={<RegistroUsuario></RegistroUsuario>}></Route>
                <Route path='/registro-exitoso' element={<SignInSuccessPage></SignInSuccessPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;