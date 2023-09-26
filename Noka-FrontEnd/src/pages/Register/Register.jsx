// import "./register.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { APIService } from "../../services/APIService";
// import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom";
// import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
// import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";

// const RegistroUsuario = () => {
//   const { setUser } = useAuth();
//   const [nameError, setNameError] = useState("");
//   const [lastnameError, setLastnameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [birthdateError, setBirthdateError] = useState("");
//   const [genderError, setGenderError] = useState("");

//   // const FORM_ENDPOINT = "http://localhost:8000/api/register";
//   const navigate = useNavigate();

//   // Define la función para registrar al usuario
//   const registerUser = async (name, lastname,  email, password, cpassword, birthdate, gender) => {
//     console.log("Registering user:", name, lastname,  email, password, cpassword, birthdate, gender);
//     const body = {
//       name,
//       lastname,
//       email,
//       password,
//       password_confirmation: cpassword,
//       birthdate, 
//       gender
//     };
//     try {
//       // Utiliza APIService para realizar la solicitud POST
//       const response = await APIService("/register", "POST", body);
//       console.log("Response from API:", response);

//       if (response.user) {
//         setUser(response.user);
//         console.log("Redirigiendo a /registro-exitoso");
//         navigate("/registro-exitoso");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//       if (error.response && error.response.status === 422) {
//         console.log(error.response.data.errors);
//         if (error.response.data.errors.name) {
//           setNameError(error.response.data.errors.name[0]);
//         } else {
//           setNameError("");
//         }
//         if (error.response.data.errors.lastname) {
//           setLastnameError(error.response.data.errors.lastname[0]);
//         } else {
//           setLastnameError("");
//         }
//         if (error.response.data.errors.email) {
//           setEmailError(error.response.data.errors.email[0]);
//         } else {
//           setEmailError("");
//         }
//         if (error.response.data.errors.password) {
//           setPasswordError(error.response.data.errors.password[0]);
//         } else {
//           setPasswordError("");
//         }
//         if (error.response.data.errors.birthdate) {
//           setBirthdateError(error.response.data.errors.birthdate[0]);
//         } else {
//           setBirthdateError("");
//         }
//         if (error.response.data.errors.gender) {
//           setGenderError(error.response.data.errors.gender[0]);
//         } else {
//           setGenderError("");
//         }
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, lastname, email, password, cpassword, birthdate, gender } = e.target.elements;
//     registerUser(name.value, lastname.value, email.value, password.value, cpassword.value, birthdate.vaue, gender.value);
//   };

//   return (
//     <>
//       <NavbarAtom
//         navbar_logo={true}
//         logo_position={"no_login"}
//         subnavbar_subtitle={true}
//       />
//       <main>
//         <section className="register_container">
//           <h1 id="register_welcome"> KAIXO! </h1>
//           <h6 id="register_subtitle">
//             {" "}
//             Izena eman <br></br> eta batu NOKAra
//           </h6>
//           <form
//             action="#"
//             method="post"
//             onSubmit={handleSubmit}
//             id="register_form_container"
//           >
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Izena"
//                 required
//               />
//               {nameError && <p className="register_text_error"> {nameError}</p>}
//             </div>
//               <input
//                 type="text"
//                 name="lastname"
//                 id="lastname"
//                 placeholder="Abizena"
//                 required
//               />
//               {nameError && <p className="register_text_error"> {lastnameError}</p>}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Helbide elektronikoa"
//                 required
//               />
//               {emailError && <p className="register_text_error">{emailError}</p>}
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="••••••••"
//                 required
//               />
//               {passwordError && (
//                 <p className="register_text_error">{passwordError}</p>
//               )}
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="cpassword"
//                 id="cpassword"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="date"
//                 name="birthdate"
//                 id="birthdate"
//                 placeholder="Jaiotze data"
//                 required
//               />
//               {birthdateError && (
//                 <p className="register_text_error">{birthdateError}</p>
//               )}
//             </div>
//             <div>
//                 <select name="category_id" class="form-control">
//                   @foreach()
//                     <option value="{{ user.id }}">
//                       {{ user.gender }}
//                     </option>
//                   @endforeach
//                 </select>
//               {genderError && (
//                 <p className="register_text_error">{genderError}</p>
//               )}
//             </div>

//             <ButtonAtom
//               label={"BIDALI"}
//               color={"blue"}
//               width={"small"}
//               type={"submit"}
//             ></ButtonAtom>

//             <p id="register_text_account">
//               {" "}
//               Badaukazu kontua?{" "}
//               <Link id="register_link_login" to="/login">
//                 {" "}
//                 Sartu hemen{" "}
//               </Link>
//             </p>
//           </form>
//         </section>
//       </main>
//       <FooterAtom logo={false}></FooterAtom>
//     </>
//   );
// };

// export default RegistroUsuario;



import "./register.css";
import { useState, useEffect } from "react";
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
  const [genderError, setGenderError] = useState("");
  const [genderOptions, setGenderOptions] = useState([]);
  const [provinceError, setProvinceError] = useState("");
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [kidegoaError, setKidegoaError] = useState("");
  const [kidegoaOptions, setKidegoaOptions] = useState([]);
  const [etapaError, setEtapaError] = useState("");
  const [etapaOptions, setEtapaOptions] = useState([]);
  const [privacyError, setPrivacyError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
  // Función para cargar las opciones de género desde la API
  const loadGenderOptions = async () => {
    try {
      const response = await APIService("/gender-options", "GET");
      setGenderOptions(response); // Suponiendo que la respuesta contiene un array de opciones de género
    } catch (error) {
      console.error("Error al cargar las opciones de género:", error);
    }
  };

  // Función para cargar las opciones de provincias desde la API
  const loadProvinceOptions = async () => {
    try {
      const response = await APIService("/province-options", "GET");
      setProvinceOptions(response); // Suponiendo que la respuesta contiene un array de opciones de provincias
    } catch (error) {
      console.error("Error al cargar las opciones de género:", error);
    }
  };

  // Función para cargar las opciones de "kidegoa" desde la API
  const loadKidegoaOptions = async () => {
    try {
      const response = await APIService("/kidegoa-options", "GET");
      setKidegoaOptions(response); // Suponiendo que la respuesta contiene un array de opciones de provincias
    } catch (error) {
      console.error("Error al cargar las opciones de género:", error);
    }
  };
  
    // Función para cargar las opciones de "kidegoa" desde la API
  const loadEtapaOptions = async () => {
    try {
      const response = await APIService("/etapa-options", "GET");
      setEtapaOptions(response); // Suponiendo que la respuesta contiene un array de opciones de provincias
    } catch (error) {
      console.error("Error al cargar las opciones de etapa:", error);
    }
  };
  

      // Llamar a las funciones para cargar las opciones al montar el componente
      loadGenderOptions();
      loadProvinceOptions();
      loadKidegoaOptions();
      loadEtapaOptions();
    }, []);




  // Define la función para registrar al usuario
  const registerUser = async (name, lastname, email, password, cpassword, birthdate, gender, province, kidegoa, etapa, privacy, info) => {
    console.log("Registering user:", name, lastname, email, password, cpassword, birthdate, gender, province, kidegoa, etapa, privacy, info);
    const body = {
      name,
      lastname,
      email,
      password,
      password_confirmation: cpassword,
      birthdate,
      gender,
      province,
      kidegoa,
      etapa,
      privacy,
      info,
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
      if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
        console.log(error.response.data.errors);
        if (error.response.data.errors.name) {
          setNameError(error.response.data.errors.name[0]);
        } else {
          setNameError("");
        }
        if (error.response.data.errors.lastname) {
          setLastnameError(error.response.data.errors.lastname[0]);
        } else {
          setLastnameError("");
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
        if (error.response.data.errors.birthdate) {
          setBirthdateError(error.response.data.errors.birthdate[0]);
        } else {
          setBirthdateError("");
        }
        if (error.response.data.errors.gender) {
          setGenderError(error.response.data.errors.gender[0]);
        } else {
          setGenderError("");
        }
        if (error.response.data.errors.province) {
          setProvinceError(error.response.data.errors.province[0]);
        } else {
          setProvinceError("");
        }
        if (error.response.data.errors.kidegoa) {
          setKidegoaError(error.response.data.errors.kidegoa[0]);
        } else {
          setKidegoaError("");
        }
        if (error.response.data.errors.etapa) {
          setEtapaError(error.response.data.errors.etapa[0]);
        } else {
          setEtapaError("");
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
    const { name, lastname, email, password, cpassword, birthdate, gender, province, kidegoa, etapa, privacy, info } = e.target.elements;
      // Convertir los valores de privacy e info a booleanos
    const privacyValue = privacy.checked;
    const infoValue = info.checked;
    const genderValue = gender.value;
  console.log("Gender value:", gender.value);
    registerUser(name.value, lastname.value, email.value, password.value, cpassword.value, birthdate.value, genderValue, province.value, kidegoa.value, etapa.value, privacyValue, infoValue); 
  console.log("Gender value:", gender.value);
  };

  return (
    <>
      <NavbarAtom navbar_logo={true} logo_position={"no_login"} subnavbar_subtitle={true} />
      <main>
        <section className="register_container">
          <h1 id="register_welcome"> KAIXO! </h1>
          <h6 id="register_subtitle">
            {" "}
            Izena eman <br></br> eta batu NOKAra
          </h6>
          <form action="#" method="post" onSubmit={handleSubmit} id="register_form_container">
            <div>
              <input type="text" name="name" id="name" placeholder="Izena" required />
              {nameError && <p className="register_text_error"> {nameError}</p>}
            </div>
            <div>
              <input type="text" name="lastname" id="lastname" placeholder="Abizena" required />
              {lastnameError && <p className="register_text_error"> {lastnameError}</p>}
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="Helbide elektronikoa" required />
              {emailError && <p className="register_text_error">{emailError}</p>}
            </div>
            <div>
              <input type="password" name="password" id="password" placeholder="••••••••" required />
              {passwordError && <p className="register_text_error">{passwordError}</p>}
            </div>
            <div>
              <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" required />
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
            <div>
              <select name="gender" id="gender" required>
                <option value="" disabled hidden>Generoa</option>
                {genderOptions.map((gender) => (
                  <option key={gender} value={gender} name={gender}>
                    {gender}
                  </option>
                ))}
              </select>
              {genderError && <p className="register_text_error">{genderError}</p>}
              </div>
            <div>
              <select name="province" id="province" required>
                <option value="">Probintzia(ikastetxearena)</option>
                {provinceOptions.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              {provinceError && <p className="register_text_error">{provinceError}</p>}
            </div>
            <div>
              <select name="kidegoa" id="kidegoa" required>
                <option value="">Kidegoa</option>
                {kidegoaOptions.map((kidegoa) => (
                  <option key={kidegoa} value={kidegoa}>
                    {kidegoa}
                  </option>
                ))}
              </select>
              {kidegoaError && <p className="register_text_error">{kidegoaError}</p>}
            </div>
            <div>
              <select name="etapa" id="etapa" required>
                <option value="">Etapa</option>
                {etapaOptions.map((etapa) => (
                  <option key={etapa} value={etapa}>
                    {etapa}
                  </option>
                ))}
              </select>
              {etapaError && <p className="register_text_error">{etapaError}</p>}
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





// import "./register.css";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { APIService } from "../../services/APIService";
// import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom";
// import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
// import FooterAtom from "../../components/atoms/FooterAtom/FooterAtom";

// const RegistroUsuario = () => {
//   const { setUser } = useAuth();
//   const [nameError, setNameError] = useState("");
//   const [lastnameError, setLastnameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [birthdateError, setBirthdateError] = useState("");
//   const [genderError, setGenderError] = useState("");
//   const [genderOptions, setGenderOptions] = useState([]);
//   const [provinceError, setProvinceError] = useState("");
//   const [provinceOptions, setProvinceOptions] = useState([]);
//   const [kidegoaError, setKidegoaError] = useState("");
//   const [kidegoaOptions, setKidegoaOptions] = useState([]);
//   const [etapaError, setEtapaError] = useState("");
//   const [etapaOptions, setEtapaOptions] = useState([]);
//   const [privacyError, setPrivacyError] = useState("");

//   // Estados para almacenar los valores enumerados
//   const [genderValues, setGenderValues] = useState([]);
//   const [provinceValues, setProvinceValues] = useState([]);
//   const [kidegoaValues, setKidegoaValues] = useState([]);
//   const [etapaValues, setEtapaValues] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Función para cargar las opciones de género desde la API
//     const loadGenderOptions = async () => {
//       try {
//         const response = await APIService("/gender-options", "GET");
//         setGenderOptions(response); // Suponiendo que la respuesta contiene un array de opciones de género
//       } catch (error) {
//         console.error("Error al cargar las opciones de género:", error);
//       }
//     };

//     // Función para cargar las opciones de provincias desde la API
//     const loadProvinceOptions = async () => {
//       try {
//         const response = await APIService("/province-options", "GET");
//         setProvinceOptions(response); // Suponiendo que la respuesta contiene un array de opciones de provincias
//       } catch (error) {
//         console.error("Error al cargar las opciones de provincias:", error);
//       }
//     };

//     // Función para cargar las opciones de "kidegoa" desde la API
//     const loadKidegoaOptions = async () => {
//       try {
//         const response = await APIService("/kidegoa-options", "GET");
//         setKidegoaOptions(response); // Suponiendo que la respuesta contiene un array de opciones de kidegoa
//       } catch (error) {
//         console.error("Error al cargar las opciones de kidegoa:", error);
//       }
//     };

//     // Función para cargar las opciones de "etapa" desde la API
//     const loadEtapaOptions = async () => {
//       try {
//         const response = await APIService("/etapa-options", "GET");
//         setEtapaOptions(response); // Suponiendo que la respuesta contiene un array de opciones de etapa
//       } catch (error) {
//         console.error("Error al cargar las opciones de etapa:", error);
//       }
//     };

//     // Función para cargar los valores enumerados desde la API
//     const loadEnumValues = async () => {
//       try {
//         const response = await APIService("/gender-options", "GET"); // Cambia "/enum-options" a la ruta correcta
//         setGenderValues(response.gender);
//         setProvinceValues(response.province);
//         setKidegoaValues(response.kidegoa);
//         setEtapaValues(response.etapa);
//       } catch (error) {
//         console.error("Error al cargar los valores enumerados:", error);
//       }
//     };

//     // Llamar a las funciones para cargar las opciones al montar el componente
//     loadGenderOptions();
//     loadProvinceOptions();
//     loadKidegoaOptions();
//     loadEtapaOptions();
//     loadEnumValues();
//   }, []);

//   // Define la función para registrar al usuario
//   const registerUser = async (name, lastname, email, password, cpassword, birthdate, gender, province, kidegoa, etapa, privacy, info) => {
//     console.log("Registering user:", name, lastname, email, password, cpassword, birthdate, gender, province, kidegoa, etapa, privacy, info);
//     const body = {
//       name,
//       lastname,
//       email,
//       password,
//       password_confirmation: cpassword,
//       birthdate,
//       gender,
//       province,
//       kidegoa,
//       etapa,
//       privacy,
//       info,
//     };
//     try {
//       // Utiliza APIService para realizar la solicitud POST
//       const response = await APIService("/register", "POST", body);
//       console.log("Response from API:", response);

//       if (response.user) {
//         setUser(response.user);
//         console.log("Redirigiendo a /registro-exitoso");
//         navigate("/registro-exitoso");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//       if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
//         console.log(error.response.data.errors);
//         if (error.response.data.errors.name) {
//           setNameError(error.response.data.errors.name[0]);
//         } else {
//           setNameError("");
//         }
//         if (error.response.data.errors.lastname) {
//           setLastnameError(error.response.data.errors.lastname[0]);
//         } else {
//           setLastnameError("");
//         }
//         if (error.response.data.errors.email) {
//           setEmailError(error.response.data.errors.email[0]);
//         } else {
//           setEmailError("");
//         }
//         if (error.response.data.errors.password) {
//           setPasswordError(error.response.data.errors.password[0]);
//         } else {
//           setPasswordError("");
//         }
//         if (error.response.data.errors.birthdate) {
//           setBirthdateError(error.response.data.errors.birthdate[0]);
//         } else {
//           setBirthdateError("");
//         }
//         if (error.response.data.errors.gender) {
//           setGenderError(error.response.data.errors.gender[0]);
//         } else {
//           setGenderError("");
//         }
//         if (error.response.data.errors.province) {
//           setProvinceError(error.response.data.errors.province[0]);
//         } else {
//           setProvinceError("");
//         }
//         if (error.response.data.errors.kidegoa) {
//           setKidegoaError(error.response.data.errors.kidegoa[0]);
//         } else {
//           setKidegoaError("");
//         }
//         if (error.response.data.errors.etapa) {
//           setEtapaError(error.response.data.errors.etapa[0]);
//         } else {
//           setEtapaError("");
//         }
//         if (error.response.data.errors.privacy) {
//           setPrivacyError(error.response.data.errors.privacy[0]);
//         } else {
//           setPrivacyError("");
//         }
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, lastname, email, password, cpassword, birthdate, gender, province, kidegoa, etapa, privacy, info } = e.target.elements;
//     // Convertir los valores de privacy e info a booleanos
//     const privacyValue = privacy.checked;
//     const infoValue = info.checked;
//     const genderValue = gender.value;
//     console.log("Gender value:", gender.value);
//     registerUser(name.value, lastname.value, email.value, password.value, cpassword.value, birthdate.value, genderValue, province.value, kidegoa.value, etapa.value, privacyValue, infoValue);
//     console.log("Gender value:", gender.value);
//   };

//   return (
//     <>
//       <NavbarAtom navbar_logo={true} logo_position={"no_login"} subnavbar_subtitle={true} />
//       <main>
//         <section className="register_container">
//           <h1 id="register_welcome"> KAIXO! </h1>
//           <h6 id="register_subtitle">
//             {" "}
//             Izena eman <br></br> eta batu NOKAra
//           </h6>
//           <form action="#" method="post" onSubmit={handleSubmit} id="register_form_container">
//             <div>
//               <input type="text" name="name" id="name" placeholder="Izena" required />
//               {nameError && <p className="register_text_error"> {nameError}</p>}
//             </div>
//             <div>
//               <input type="text" name="lastname" id="lastname" placeholder="Abizena" required />
//               {lastnameError && <p className="register_text_error"> {lastnameError}</p>}
//             </div>
//             <div>
//               <input type="email" name="email" id="email" placeholder="Helbide elektronikoa" required />
//               {emailError && <p className="register_text_error">{emailError}</p>}
//             </div>
//             <div>
//               <input type="password" name="password" id="password" placeholder="••••••••" required />
//               {passwordError && <p className="register_text_error">{passwordError}</p>}
//             </div>
//             <div>
//               <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" required />
//             </div>
//             <div>
//               <input
//                 name="birthdate"
//                 id="birthdate"
//                 placeholder="Jaiotze data"
//                 onFocus={(event) => {
//                   event.target.type = 'date';
//                 }}
//                 required
//               />
//               {birthdateError && <p className="register_text_error">{birthdateError}</p>}
//             </div>
//             <div>
//               <select name="gender" id="gender" required>
//                 <option value="" >Generoa</option>
//                 {genderOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//               {genderError && <p className="register_text_error">{genderError}</p>}
//             </div>
//             <div>
//               <select name="province" id="province" required>
//                 <option value="">Probintzia(ikastetxearena)</option>
//                 {provinceOptions.map((province) => (
//                   <option key={province} value={province}>
//                     {province}
//                   </option>
//                 ))}
//               </select>
//               {provinceError && <p className="register_text_error">{provinceError}</p>}
//             </div>
//             <div>
//               <select name="kidegoa" id="kidegoa" required>
//                 <option value="">Kidegoa</option>
//                 {kidegoaOptions.map((kidegoa) => (
//                   <option key={kidegoa} value={kidegoa}>
//                     {kidegoa}
//                   </option>
//                 ))}
//               </select>
//               {kidegoaError && <p className="register_text_error">{kidegoaError}</p>}
//             </div>
//             <div>
//               <select name="etapa" id="etapa" required>
//                 <option value="">Etapa</option>
//                 {etapaOptions.map((etapa) => (
//                   <option key={etapa} value={etapa}>
//                     {etapa}
//                   </option>
//                 ))}
//               </select>
//               {etapaError && <p className="register_text_error">{etapaError}</p>}
//             </div>

//             <label className="register_permisions_container" id="register_privacy_checkbox">
//               <input type="checkbox" name="privacy" id="privacy" required /> Onartzen dut NOKAren newsletterrarekin bat egitea.
//             </label>
//             {privacyError && <p className="register_text_error"> {privacyError}</p>}

//             <label className="register_permisions_container" id="register_info_checkbox">
//               <input type="checkbox" name="info" id="info" /> Pribatutasun politika eta erosteko baldintza orokorrak irakurri eta onartzen ditut.
//             </label>

//             <ButtonAtom label={"BIDALI"} color={"blue"} width={"small"} type={"submit"}></ButtonAtom>

//             <p id="register_text_account">
//               {" "}
//               Badaukazu kontua?{" "}
//               <Link id="register_link_login" to="/login">
//                 {" "}
//                 Sartu hemen{" "}
//               </Link>
//             </p>
//           </form>
//         </section>
//       </main>
//       <FooterAtom logo={false}></FooterAtom>
//     </>
//   );
// };

// export default RegistroUsuario;

