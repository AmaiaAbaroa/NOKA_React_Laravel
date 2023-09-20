import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./footerAtom.css";
import logoDark from '../../../assets/img/Logo_fondo_oscuro.png';


const FooterAtom = ({logo}) => {

  return (
    <>
         <footer className='footer_container'>
            <Link className="link_decoration" to='/'><img className={logo ? "footer_logo_img" : "footer_logo_img_none"} src={logoDark} alt="Logo Noka" /></Link>
                <div className="footer_text_container">
                    <p className="footer_text">Eskubide guztiak erreserbatuta 2023</p>
                    <div className="footer_links">
                        <a href="#">Lege oharra </a>
                        <p>|</p>
                        <a href="#">Pribatutasun politika</a>
                        <p>|</p>
                        <a href="#">Cookie politika</a>
                    </div>
                    <div className="footer_links">
                        <a href="#">Kontaktua</a>
                        <p>|</p>
                        <a href="#">Gardentasuna</a>
                        <p>|</p>
                        <a href="#">Blog</a>
                        <p>|</p>
                        <a href="#">Disseño Noka</a>
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