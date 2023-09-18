// THIS IS THE ONE WORKING!!

// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const RegistroUsuario = () => {


//   const FORM_ENDPOINT = "http://localhost:8000/api/register";
//   const navigate = useNavigate();

//   const handleSubmit = (event) =>{
//     event.preventDefault();

//         try {

//             axios.post(FORM_ENDPOINT,new FormData(event.target))
//             .then(response=>{
//                 if(response.data){
//                   navigate('/registro-exitoso');
//                 }
//               })
//         } catch (error) {
//             console.error('Error inesperado:', error);
//         }
//   };

//   return (
//     <>
//       <div>
//         <h1>Registro de Usuario</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder='Nombre'
//               required
//             />
//           </div>
//           <div>
            
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder='Email'
//               required
//             />
//           </div>
//           <div>
            
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder='Contraseña'
//               required
//             />
//           </div>
//           <div>
            
//             <input
//               type="password"
//               id="password_confirmation"
//               name="password_confirmation"
//               placeholder='Confirma la contraseña'
//               required
//             />
//           </div>
//           <button type="submit">Registrarse</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default RegistroUsuario



import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { APIService } from '../services/APIService';
import logo_light from '../assets/img/Logo_fondo_claro.png';

const RegistroUsuario = () => {

  const { setUser } = useAuth();
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

  // const FORM_ENDPOINT = "http://localhost:8000/api/register";
  const navigate = useNavigate();


 // Define la función para registrar al usuario
  const registerUser = async (name, email, password, cpassword) => {
    console.log('Registering user:', name, email, password, cpassword);
    const body = {
      name,
      email,
      password,
      password_confirmation: cpassword,
    };
        try {
          // Utiliza APIService para realizar la solicitud POST
          const response = await APIService('/register', 'POST', body);
          console.log('Response from API:', response);

          if (response.user) {
            setUser(response.user);
            console.log('Redirigiendo a /registro-exitoso');
            navigate('/registro-exitoso');
          }
          }catch (error) {
          console.log('Error:', error);
          if (error.response && error.response.status === 422) {
            console.log(error.response.data.errors);
            if (error.response.data.errors.name) {
              setNameError(error.response.data.errors.name[0]);
            } else {
              nameError('');
            }
            if (error.response.data.errors.email) {
              setEmailError(error.response.data.errors.email[0]);
            } else {
              emailError('');
            }
            if (error.response.data.errors.password) {
              setPasswordError(error.response.data.errors.password[0]);
            } else {
              passwordError('');
            }
          }
        }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = e.target.elements;
    registerUser(name.value, email.value, password.value, cpassword.value);
  };

  return (
    <>
      <section style={{ backgroundColor: "#F3F4F6" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <Link
            to='#'
            style={{ display: "flex", alignItems: "center", marginBottom: "24px", fontSize: "1.5rem", fontWeight: "600", color: "#374151" }}>
            <img src={logo_light} alt="Logo NOKA"/>
          </Link>
          <div style={{ width: "100%", backgroundColor: "#FFFFFF", borderRadius: "0.375rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", borderColor: "#C4C4C4" }}>
            <div style={{ padding: "24px", marginBottom: "24px" }}>
              <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", lineHeight: "1.5", letterSpacing: "-0.025em", color: "#374151" }}>
                Create an account
              </h1>
              <form
                style={{ marginBottom: "24px" }}
                action="#"
                method="post"
                onSubmit={handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="name"
                    style={{ marginBottom: "8px", fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    style={{ backgroundColor: "#F3F4F6", border: "1px solid #D1D5DB", color: "#374151", fontSize: "0.875rem", borderRadius: "0.375rem", padding: "10px", width: "100%" }}
                    placeholder="Nombre"
                    required
                  />
                  {nameError && (
                    <p style={{ fontSize: "0.875rem", color: "#EF4444" }}>{nameError}</p>
                  )}
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="email"
                    style={{ marginBottom: "8px", fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    style={{ backgroundColor: "#F3F4F6", border: "1px solid #D1D5DB", color: "#374151", fontSize: "0.875rem", borderRadius: "0.375rem", padding: "10px", width: "100%" }}
                    placeholder="name@company.com"
                    required
                  />
                  {emailError && (
                    <p style={{ fontSize: "0.875rem", color: "#EF4444" }}>{emailError}</p>
                  )}
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="password"
                    style={{ marginBottom: "8px", fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    style={{ backgroundColor: "#F3F4F6", border: "1px solid #D1D5DB", color: "#374151", fontSize: "0.875rem", borderRadius: "0.375rem", padding: "10px", width: "100%" }}
                    required
                  />
                  {passwordError && (
                    <p style={{ fontSize: "0.875rem", color: "#EF4444" }}>{passwordError}</p>
                  )}
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    htmlFor="cpassword"
                    style={{ marginBottom: "8px", fontSize: "0.875rem", fontWeight: "500", color: "#374151" }}>
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="••••••••"
                    style={{ backgroundColor: "#F3F4F6", border: "1px solid #D1D5DB", color: "#374151", fontSize: "0.875rem", borderRadius: "0.375rem", padding: "10px", width: "100%" }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#3B82F6", color: "#FFFFFF", fontSize: "0.875rem", fontWeight: "500", borderRadius: "0.375rem", padding: "10px", width: "100%", cursor: "pointer" }}>
                  Create an account
                </button>
                <p style={{ fontSize: "0.875rem", fontWeight: "lighter", color: "#6B7280" }}>
                  Already have an account?{' '}
                  <Link
                    to='/login'
                    style={{ fontWeight: "500", color: "#3B82F6", textDecoration: "none" }}>
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistroUsuario

