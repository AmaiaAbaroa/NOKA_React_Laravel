import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const FORM_ENDPOINT = "http://localhost:8000/api/login";
  const navigate = useNavigate();
  const logIn = (data) => {
    sessionStorage.setItem("UserID", data['UserID']);
} 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        axios.post(FORM_ENDPOINT,new FormData(event.target))
        .then(response=>{
            if(response.data){
              logIn(response.data);
              navigate('/login-exitoso');
            }
          })

         } catch (error) {
            console.error('Error inesperado:', error);
      }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
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
      </form>
    </div>
  );
};

export default Login;