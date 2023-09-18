
// import { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

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
//       const response = await axios.post('http://localhost:8000/api/login', body);
      
//       if (response.status === 200) {
//         const responseData = response.data;
//         setUser(responseData.user);
//         sessionStorage.setItem('UserID', responseData.user.id);
//         navigate('/registro-exitoso');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError('Credenciales incorrectas. Inténtalo de nuevo.');
//       } else {
//         setError('error.response.data.message');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Iniciar Sesión</h1>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleSubmit}>
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
//         </div>
//         <button type="submit">Iniciar Sesión</button>
//         <div>
//           <p>Todavía no tienes cuenta?
// 								<Link	to="/registro">
// 									Sign up
// 								</Link>
// 					</p>
//         </div>    
//       </form>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { APIService } from '../services/APIService'; 

const Login = () => {
  const { setUser, csrfToken } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

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
      if (error.response && error.response.status === 401) {
        setError('Credenciales incorrectas. Inténtalo de nuevo.');
      } else {
        setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <div>
          <p>Todavía no tienes cuenta?
            <Link to="/registro">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
