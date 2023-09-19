import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import RegistroUsuario from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import SignInSuccessPage from "../pages/SignInSucces/SignInSuccessPage";
import UserProfile from "../pages/UserProfile/UserProfile";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
          <Route
            path="/registro"
            element={<RegistroUsuario></RegistroUsuario>}
          ></Route>
          <Route
            path="/registro-exitoso"
            element={<SignInSuccessPage></SignInSuccessPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from '../context/AuthContext';
// import PropTypes from 'prop-types';
// import RegistroUsuario from "../pages/Register";
// import Login from "../pages/Login";
// import SignInSuccessPage from "../pages/SignInSuccessPage";
// import Profile from "../pages/Profile";
// import ProtectedLayout from "../components/layouts/ProtectedLayout"
// import GuestLayout from "../components/layouts/GuestLayout";

// // Componente de ruta protegida
// function ProtectedRoute({ element }) {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return <>{element}</>;
// }

// const Router = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="" element={<GuestLayout />}>
//             <Route path="login" element={<Login />} />
//             <Route path="registro" element={<RegistroUsuario />} />
//             <Route path="registro-exitoso" element={<SignInSuccessPage />} />
//           </Route>
//           {/* Ruta protegida */}
//           <Route path="protected" element={<ProtectedLayout />}>
//             <Route path="profile" element={<ProtectedRoute element={<Profile />} />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// ProtectedRoute.propTypes = {
//   element: PropTypes.element.isRequired,
// };

// export default Router;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from '../context/AuthContext';
// import PropTypes from 'prop-types';
// import RegistroUsuario from "../pages/Register";
// import Login from "../pages/Login";
// import SignInSuccessPage from "../pages/SignInSuccessPage";
// import Profile from "../pages/Profile";
// import ProtectedLayout from "../components/layouts/ProtectedLayout"
// import GuestLayout from "../components/layouts/GuestLayout";

// // Componente de ruta protegida
// function ProtectedRoute({ element}) {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return <>{element}</>;
// }
// console.log('Configuring router');
// const Router = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<GuestLayout />}>
//                 <Route path="/" element={<Login />} />
//                 <Route path="registro" element={<RegistroUsuario />} />
//                 <Route path="registro-exitoso" element={<SignInSuccessPage />} />
//           </Route>
//           {/* Ruta protegida */}
//           <Route path="/protected" element={<ProtectedLayout />}>
//                 <Route path="profile" element={<ProtectedRoute element={<Profile />} />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// ProtectedRoute.propTypes = {
//     element: PropTypes.any.isRequired,
// };

// export default Router;
