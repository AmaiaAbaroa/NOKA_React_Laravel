import './signInSuccessPage.css';
import { Link } from "react-router-dom";
import signInSuccess from '../../assets/img/SignInSuccess.png';
import ButtonAtom from '../../components/atoms/ButtonAtom/ButtonAtom';

export default function SignInSuccessPage(){
    return(
        <>
            <main id='success_container'>
               <h1 id='success_welcome'>¡Zure eskaera bidalita izan da!</h1>
                <div id='success_img_container'>
                    <img src={signInSuccess} alt="" />
                </div>
                <p id='success_subtitle'> Sartu zure kontuan eta kuxkuxeatu NOKA.</p>

                <Link className="link-decoration" to="/login"><ButtonAtom label='NIRE KONTUA' color='white' width={'big'}></ButtonAtom></Link>
 
            </main>
            
        </>
    )
}