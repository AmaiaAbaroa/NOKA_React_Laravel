import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./footerAtom.css";
import logoLight from '../../../assets/img/Logo_fondo_claro.png';


const FooterAtom = ({logo}) => {

  return (
    <>
         <footer className='footer_container'>
            <Link className="link_decoration" to='/'><img className={logo ? "footer_logo_img" : "footer_logo_img_none"} src={logoLight} alt="Logo Noka" /></Link>
                <div className="footer_text_container">
                    <p className="footer_text">Todos los derechos reservados 2021</p>
                    <div className="footer_links">
                        <a href="#">Aviso legal     </a>
                        <p>|</p>
                        <a href="#">Política de privacidad</a>
                        <p>|</p>
                        <a href="#">Política de Cookies</a>
                    </div>
                    <div className="footer_links">
                        <a href="#"> Contacta</a>
                        <p>|</p>
                        <a href="#">Transparencia</a>
                        <p>|</p>
                        <a href="#">Blog</a>
                        <p>|</p>
                        <a href="#">Diseño web Barcelona</a>
                    </div>
                </div>
        </footer>
 
   </>
  )
}  

FooterAtom.propTypes = {
    logo: PropTypes.bool.isRequired,
  };

export default FooterAtom;