// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true }); // Realiza la petición de logout
//       if (response) {
//         console.log(response)
//         localStorage.removeItem('user');
//         navigate('/login');
//         console.log(response)
//     }} catch (error) {
//       console.error('Error al cerrar sesión:', error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Cerrar Sesión</button>
//   );
// };

// export default LogoutButton;


import { useNavigate } from 'react-router-dom';
import { APIService } from '../../../services/APIService'; // Importa APIService

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Utiliza APIService para realizar la petición de logout
      await APIService('/logout', 'POST', {});

      // Elimina los datos del usuario del localStorage
      localStorage.removeItem('user');

      // Redirige a '/login'
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Cerrar Sesión</button>
  );
};

export default LogoutButton;

