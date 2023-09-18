

// export default function HellowLogin(){
//     return(
//         <>
            
//             <main>
//                <h1>EGUN ON, MARIPURI! </h1>
//                 <div>
                    
//                     <p>
//                         Zure kontu barruan zaude.
//                     </p>
//                 </div>
//             </main>
            
//         </>
//     )
// }


import { useAuth } from '../context/AuthContext'; 
import LogoutButton from '../components/atoms/LogoutButton/LogoutButton';

export default function Profile() {
  const { user } = useAuth(); // Obtén la información del usuario del contexto
  console.log(user)
  
  return (
  
    <>
      <div>
      {user ? (
        <main>
          <h1>EGUN ON, {user ? user.name : 'ONGIETORRI'}!</h1>
          
          <div>
            <p>Zure kontu barruan zaude.</p>
          </div>
          <LogoutButton />
        </main>
      ) : (
        <p>Usuario no autenticado</p>
      )}
    </div>
  </>
  
  );
}





