// import { useState } from 'react';
// import APIService from '../services/APIService'; 

// export default function RegistroUsuario() {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Submit button clicked');
//     const url = 'http://localhost:8000/api/register'; 
//     const method = 'POST';
//     console.log('URL:', url); 
//     console.log('Method:', method);

//     try {
//       // Llama a APIService con los datos del formulario
//       const { data, error } = await APIService(url, method, formData);

//       if (error) {
//         // Maneja el error, muestra un mensaje de error, etc.
//         console.error('Error al registrar el usuario:', error);
//       } else if (data) {
//         // Los datos se han enviado con éxito, puedes realizar acciones adicionales si es necesario
//         console.log('Usuario registrado con éxito:', data);
//       }
//     } catch (error) {
//       console.error('Error inesperado:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Registro de Usuario</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="nombre">Nombre:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Contraseña:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password_confirmation">Confirma la contraseña:</label>
//           <input
//             type="password_confirmation"
//             id="password_confirmation"
//             name="password_confirmation"
//             value={formData.password_confirmation}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Registrarse</button>
//       </form>
//     </div>
//   );
// }





// import { useState } from 'react';
// import { useAPIService } from '../services/APIService';
// import { useNavigate } from "react-router-dom";

// export default function RegistroUsuario() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   });

//   const url = 'http://localhost:8000/api/register';
//   const method = 'POST';
//   const navigate = useNavigate();

//   const { data, error } = useAPIService(url, method, formData);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Submit button clicked');
//     console.log('URL:', url);
//     console.log('Method:', method);

//     try {
//       if (error) {
//         console.log(error);
//         // Maneja el error, muestra un mensaje de error, etc.
//         console.error('Error al registrar el usuario:', error);
//       } else if (data) {
//         // Los datos se han enviado con éxito, puedes realizar acciones adicionales si es necesario
//         console.log('Usuario registrado con éxito:', data);
//         navigate('/registro-exitoso');
//       }
//     } catch (error) {
//       console.error('Error inesperado:', error);
//       if (error.response) {
//         // Aquí puedes acceder a la respuesta del servidor
//         console.log('Respuesta del servidor:', error.response.data);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Registro de Usuario</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//            <label htmlFor="nombre">Nombre:</label>
//            <input
//              type="text"
//              id="name"
//              name="name"
//              value={formData.name}
//              onChange={handleInputChange}
//              required
//            />
//          </div>
//          <div>
//            <label htmlFor="email">Email:</label>
//            <input
//              type="email"
//              id="email"
//              name="email"
//              value={formData.email}
//              onChange={handleInputChange}
//              required
//            />
//          </div>
//          <div>
//            <label htmlFor="password">Contraseña:</label>
//            <input
//              type="password"
//              id="password"
//              name="password"
//              value={formData.password}
//              onChange={handleInputChange}
//              required
//            />
//          </div>
//          <div>
//            <label htmlFor="password_confirmation">Confirma la contraseña:</label>
//            <input
//              type="password"
//              id="password_confirmation"
//              name="password_confirmation"
//              value={formData.password_confirmation}
//              onChange={handleInputChange}
//              required
//            />
//          </div>
//          <button type="submit">Registrarse</button>
//       </form>
//     </div>
//   );
// }






import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegistroUsuario = () => {


  const FORM_ENDPOINT = "http://localhost:8000/api/register";
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();

        try {

            axios.post(FORM_ENDPOINT,new FormData(event.target))
            .then(response=>{
                if(response.data){
                  navigate('/registro-exitoso');
                }
              })
        } catch (error) {
            console.error('Error inesperado:', error);
        }
  };

  return (
    <>
      <div>
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Nombre'
              required
            />
          </div>
          <div>
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              required
            />
          </div>
          <div>
            
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Contraseña'
              required
            />
          </div>
          <div>
            
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              placeholder='Confirma la contraseña'
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
};

export default RegistroUsuario

