// import './login.css';
// import { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';
// import { APIService } from '../../services/APIService'; 
// import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';


// const Login = () => {
//   const { setUser, csrfToken } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);

//   // login user
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { email, password } = event.target.elements;
//     const body = {
//       email: email.value,
//       password: password.value,
//     };
//     await csrfToken();
//     try {
//       const responseData = await APIService('/login', 'POST', body);
      
//       if (responseData.user) {
//         setUser(responseData.user);
//         sessionStorage.setItem('UserID', responseData.user.id);
//         console.log('Redirigiendo a /profile');
//         navigate('/profile');
//       }
//       console.log(responseData);
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError('Credenciales incorrectas. Inténtalo de nuevo.');
//       } else {
//         setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
//       }
//     }
//   };

//   return (
//     <section className='login_container'>
//       <h1 id="login_welcome">ONGI ETORRI</h1>
//       <h5 id="login_subtitle">Elkarrekin gehiago gara</h5>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleSubmit} id='login_form_container'>
//         <div>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Contraseña"
//             required
//           />

//         <ButtonAtom label={'SARTU'} color={'blue'} width={'small'} type={'submit'} ></ButtonAtom>

//           <p id="login_text_account">Oraindik ez duzu konturik? 
//           {/* <br></br> */}
//             <Link id="login_link_register" to="/registro">     Eman izena hemen</Link>
//           </p>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;


import './login.css';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { APIService } from '../../services/APIService'; 
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';

const Login = () => {
  const { setUser, csrfToken } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // login user
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const body = {
      email: email.value,
      password: password.value,
    };
    await csrfToken();
    try {
      const responseData = await APIService('/login', 'POST', body);
      
      if (responseData.user) {
        setUser(responseData.user);
        sessionStorage.setItem('UserID', responseData.user.id);
        console.log('Redirigiendo a /profile');
        navigate('/profile');
      }
      console.log(responseData);
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.status === 401) {
        setError(error.response.data.message);
        setEmailError(""); // Limpiar errores anteriores
        setPasswordError(""); // Limpiar errores anteriores
      } else if (error.response && error.response.status === 422) {
        // En caso de errores de validación específicos del servidor
        if (error.response.data.errors.email) {
          setEmailError(error.response.data.errors.email[0]);
        }
        if (error.response.data.errors.password) {
          setPasswordError(error.response.data.errors.password[0]);
        }
        setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      } else {
        setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  return (
    <section className='login_container'>
      <h1 id="login_welcome">ONGI ETORRI</h1>
      <h5 id="login_subtitle">Elkarrekin gehiago gara</h5>
      
      <form onSubmit={handleSubmit} id='login_form_container'>
      {error && <div className='login_text_error'>{error}</div>}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          {emailError && (
            <p className='login_text_error'>{emailError}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          {passwordError && (
            <p className='login_text_error'>{passwordError}</p>
          )}
        </div>
        <ButtonAtom label={'SARTU'} color={'blue'} width={'small'} type={'submit'} ></ButtonAtom>

        <p id="login_text_account">Oraindik ez duzu konturik? 
          <Link id="login_link_register" to="/registro">Eman izena hemen</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
