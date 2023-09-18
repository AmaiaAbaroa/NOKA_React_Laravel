import './register.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { APIService } from "../../services/APIService";
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';


const RegistroUsuario = () => {
  const { setUser } = useAuth();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const FORM_ENDPOINT = "http://localhost:8000/api/register";
  const navigate = useNavigate();

  // Define la función para registrar al usuario
  const registerUser = async (name, email, password, cpassword) => {
    console.log("Registering user:", name, email, password, cpassword);
    const body = {
      name,
      email,
      password,
      password_confirmation: cpassword,
    };
    try {
      // Utiliza APIService para realizar la solicitud POST
      const response = await APIService("/register", "POST", body);
      console.log("Response from API:", response);

      if (response.user) {
        setUser(response.user);
        console.log("Redirigiendo a /registro-exitoso");
        navigate("/registro-exitoso");
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.status === 422) {
        console.log(error.response.data.errors);
        if (error.response.data.errors.name) {
          setNameError(error.response.data.errors.name[0]);
        } else {
          nameError("");
        }
        if (error.response.data.errors.email) {
          setEmailError(error.response.data.errors.email[0]);
        } else {
          emailError("");
        }
        if (error.response.data.errors.password) {
          setPasswordError(error.response.data.errors.password[0]);
        } else {
          passwordError("");
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
      <section className='register_container'>
          <h1 id="register_welcome"> KAIXO! </h1>
          <h6 id="register_subtitle"> Izena eman <br></br> eta batu NOKAra</h6>
          <form action="#" method="post" onSubmit={handleSubmit} id='register_form_container'>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                required
              />
              {nameError && (
                <p className='register_text_error'> {nameError}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
              />
              {emailError && (
                <p className='register_text_error'>
                  {emailError}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
              />
              {passwordError && (
                <p className='register_text_error'>
                  {passwordError}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="••••••••"
                required
              />
            </div>

            <ButtonAtom label={'BIDALI'} color={'blue'} width={'small'} type={'submit'} ></ButtonAtom>

            <p id="register_text_account"> Badaukazu kontua?{" "}
              <Link id="register_link_login" to="/login" > Sartu hemen </Link>
            </p>
          </form>
      </section>
    </>
  );
};

export default RegistroUsuario;
