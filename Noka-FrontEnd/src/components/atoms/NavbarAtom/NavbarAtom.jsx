import './navBarAtom.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import menux from '../../../assets/icons/X.svg';
import logoDark from '../../../assets/img/Logo_fondo_oscuro.png';
import logoLight from '../../../assets/img/Logo_fondo_claro.png';
import menuIcon from '../../../assets/icons/menu_icon.svg';
import accountIcon from '../../../assets/icons/account_icon.svg'
import LogoutButton from '../../molecules/LogoutButton/LogoutButton';
import ButtonAtom from '../ButtonAtom/ButtonAtom';

function NavbarAtom({name_greeting, subnavbar_subtitle, logo_position}) {
  
const { user } = useAuth(); // Obtén la información del usuario del contexto
console.log(user);
  
  const [isSocialMenuOpen, setSocialMenuOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  const handleSocialMenuClick = () => {
    setSocialMenuOpen(!isSocialMenuOpen);
    setAccountMenuOpen(false); // Cierra el menú de cuenta si estaba abierto
  };

  const handleAccountMenuClick = () => {
    setAccountMenuOpen(!isAccountMenuOpen);
    setSocialMenuOpen(false); // Cierra el menú social si estaba abierto
  };

  return (
    <>
      <nav>
        <div className='navbar_container'>
            <div className='navbar_icon_container' onClick={handleSocialMenuClick}>
            <img className="navbar_icon" src={menuIcon} alt="Icono Menú de Navegación" />
            </div>

            <h2 className='navbar_greeting_text'> {name_greeting}</h2>

            <div className='navbar_icon_container' onClick={handleAccountMenuClick}>
            <img className="navbar_account_icon" src={accountIcon} alt="Icono Menú del Navegación del Perfil" />
            </div>
        </div>
        <div className="subnavbar_container">
            <img className={`navbar_logo ${logo_position}`} src={logoLight} alt="Logo Noka" />
            <h6 className={subnavbar_subtitle ? "subnavbar_subtitle" : "subnavbar_subtitle_none"}> “ Informazioa bildu eta modu didaktiko eta <br></br> ulergarri batean azaltzea dugu helburu. ”</h6>
        </div>
      </nav>


        {/* Menu desplegable social_menu */}
      <div className={isSocialMenuOpen ? 'social_menu social_menu_active' : 'social_menu'}>

               <div className='social_menu_icon' onClick={handleSocialMenuClick}>
                <img src={menux} alt="Menu desplegable."/>    
             </div>
           <Link className="link_decoration" to='/'><div className='logo_container'>
                <a href='#'><img src={logoDark} alt="Logo Noka" /></a>
            </div></Link> 
            <ul>
                
               <Link className="link_decoration" to='/'>
                   <li>
                   HASIERA
                     </li>
                 </Link> 
                 <Link className="link_decoration" to='/'>
                     <li>
                     BURUA KOKATZEN
                     </li>
                 </Link> 
                 <Link className="link_decoration" to='/'>
                     <li>
                     PROSEZU <br></br>ADMINISTRATIBOAK 
                     </li>
                 </Link> 
                 <Link className="link_decoration" to='/'>
                     <li>
                     KALKULAGAILUA
                     </li>
                 </Link> 
                 <Link className="link_decoration" to='/'>
                     <li>
                     EGUTEGIA
                     </li>
                 </Link> 
                 <Link className="link_decoration" to='/'>
                     <li>
                     KONTSULTAK
                     </li>
                 </Link> 
                 <Link className="link_decoration" to='/'>
                     <li id='social_menu_red'>
                         KONTAKTATU
                     </li>
                 </Link>

             </ul>

      </div>
        {/* Contenido del menú de cuenta */}
      <div className={isAccountMenuOpen ? 'account_menu account_menu_active' : 'account_menu'}>
            <div className='account_menu_icon' onClick={handleAccountMenuClick}>
                    <img src={menux} alt="Menu desplegable."/>    
                </div>
                <ul>
                    
                    <Link className="link_decoration" to='/'>
                        <li>
                        NIRE PERFILA
                        </li>
                    </Link> 
                        <li id="account_menu_line_break">
                            <hr></hr>
                        </li>
                    <Link className="link_decoration" to='/login'>
                        <li id="logout_button_container">
                            {user ? <LogoutButton></LogoutButton> : 
                                    <Link to='/login'><ButtonAtom  
                                    label={"SAIOA HASI"}
                                    color={"yellow"}
                                    width={"medium"}
                                    ></ButtonAtom></Link>}
                        </li>
                    </Link>
                </ul> 
      </div>
    </>
  );
}

NavbarAtom.propTypes = {
  name_greeting: PropTypes.string.isRequired,
  subnavbar_subtitle: PropTypes.bool.isRequired,
  logo_position: PropTypes.string.isRequired,
};

export default NavbarAtom;



