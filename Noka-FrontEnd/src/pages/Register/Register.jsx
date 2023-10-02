import "./register.css";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { APIService } from "../../services/APIService";
import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom";
import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";

const RegistroUsuario = () => {
  const { setUser } = useAuth();
  const [nameError, setNameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [birthdateError, setBirthdateError] = useState("");
  const [privacyError, setPrivacyError] = useState("");

  const navigate = useNavigate();

  const registerUser = async (name, email, password, cpassword, lastname, birthdate, privacy, info ) => {
    console.log("Registering user:", name, email, password, cpassword, lastname, birthdate, privacy, info);
  
    const body = {
      name,
      email,
      password,
      password_confirmation: cpassword,
      lastname,
      birthdate,
      privacy,
      info,
    };
    try {

      const response = await APIService("/register", "POST", body);
      console.log("Response from API:", response);
      console.log(typeof response);

      if (response.user) {
        console.log("Arriba SetUser:", response);
        setUser(response.user);
        console.log("Abajo SetUser:", response.user);
        console.log("Redirigiendo a /registro-exitoso");

        navigate("/registro-exitoso");
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors);
        if (error.response.data.errors.name) {
          setNameError(error.response.data.errors.name[0]);
        } else {
          setNameError("");
        }
        if (error.response.data.errors.email) {
          setEmailError(error.response.data.errors.email[0]);
        } else {
          setEmailError("");
        }
        if (error.response.data.errors.password) {
          setPasswordError(error.response.data.errors.password[0]);
        } else {
          setPasswordError("");
        }
        if (error.response.data.errors.lastname) {
          setLastnameError(error.response.data.errors.lastname[0]);
        } else {
          setLastnameError("");
        }
        if (error.response.data.errors.birthdate) {
          setBirthdateError(error.response.data.errors.birthdate[0]);
        } else {
          setBirthdateError("");
        }
        if (error.response.data.errors.privacy) {
          setPrivacyError(error.response.data.errors.privacy[0]);
        } else {
          setPrivacyError("");
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cpassword, lastname, birthdate, privacy, info  } = e.target.elements;
    
    const privacyValue = privacy.checked;
    const infoValue = info.checked;

    registerUser(name.value, email.value, password.value, cpassword.value, lastname.value, birthdate.value, privacyValue, infoValue);
      
  };

  return (
    <>
      <NavbarAtom
        navbar_logo={true}
        logo_position={"no_login"}
        subnavbar_subtitle={true}
      />
      <main>
        <section className="register_container">
          <h1 id="register_welcome"> KAIXO! </h1>
          <h6 id="register_subtitle">
            {" "}
            Izena eman <br></br> eta batu NOKAra
          </h6>
          <form
            action="#"
            method="post"
            onSubmit={handleSubmit}
            id="register_form_container"
          >
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Izena"
                required
              />
              {nameError && <p className="register_text_error"> {nameError}</p>}
            </div>
            <div>
              <input 
              type="text" 
              name="lastname" 
              id="lastname" 
              placeholder="Abizena" 
              required />
              {lastnameError && <p className="register_text_error"> {lastnameError}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Helbide elektronikoa"
                required
              />
              {emailError && <p className="register_text_error">{emailError}</p>}
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
                <p className="register_text_error">{passwordError}</p>
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
            <div>
              <input
                name="birthdate"
                id="birthdate"
                placeholder="Jaiotze data"
                onFocus={(event) => {
                  event.target.type = 'date';
                }}
                required
              />
              {birthdateError && <p className="register_text_error">{birthdateError}</p>}
            </div>
            <label className="register_permisions_container" id="register_privacy_checkbox">
                <input type="checkbox" name="privacy" id="privacy" required/> Onartzen dut NOKAren newsletterrarekin bat egitea.
              </label>
              {privacyError && <p className="register_text_error"> {privacyError}</p>}
 
            <label className="register_permisions_container" id="register_info_checkbox">
                <input type="checkbox" name="info" id="info"/> Pribatutasun politika eta erosteko baldintza orokorrak irakurri eta onartzen ditut.
            </label>

            <ButtonAtom
              label={"BIDALI"}
              color={"blue"}
              width={"small"}
              type={"submit"}
            ></ButtonAtom>

            <p id="register_text_account">
              {" "}
              Badaukazu kontua?{" "}
              <Link id="register_link_login" to="/login">
                {" "}
                Sartu hemen{" "}
              </Link>
            </p>
          </form>
        </section>
      </main>
      <FooterAtom logo={false}></FooterAtom>
    </>
  );
}

export default RegistroUsuario;
