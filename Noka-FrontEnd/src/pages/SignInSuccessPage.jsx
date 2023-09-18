// import './signInSuccessPage.css';
// import computer from '../assets/img/online-resume.png';

export default function SignInSuccessPage(){
    console.log('Rendering RegistroExitoso');
    return(
        <>
            
            <main>
               <h1>¡Tu solicitud ha sido enviada!</h1>
                <div>
                    {/* <img src={computer} alt="Computer" /> */}
                    <p>
                        Accede a tu cuenta para seguir
                        el estado de tu candidatura.
                    </p>
                </div>
            </main>
            
        </>
    )
}