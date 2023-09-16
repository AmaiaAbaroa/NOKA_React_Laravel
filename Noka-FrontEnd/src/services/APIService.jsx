// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export default function APIservice (url,method,){
//     const [data, setData] = useState(null);

//     const getData = async (url) => {
//             try {
//             const response = await axios.get(url);
//             const responseData = response.data
            
//             setData(responseData);
//             } catch (error) {
//             console.error(error);
//             setData(null);
//             }
//     };

//     useEffect(() => {
//         switch(method){
//             case 'READ' : 
//             getData(url);
//             break;
//         }
//     }, [url,method]);
        
//     return data;
// }   



// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export function useAPIService(url, method, requestData) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const sendData = async (url, requestData) => {
//     try {
//       const response = await axios.post(url, requestData);
//       const responseData = response.data;
//       setData(responseData);
//       setError(null);
//     } catch (error) {
//       console.error(error);
//       setError(error);
//       setData(null);
//     }
//   };

//   const getData = async (url) => {
//     try {
//       const response = await axios.get(url);
//       const responseData = response.data;
//       setData(responseData);
//       setError(null);
//     } catch (error) {
//       console.error(error);
//       setError(error);
//       setData(null);
//     }
//   };

//   useEffect(() => {
//     switch (method) {
//       case 'READ':
//         getData(url);
//         break;
//       case 'POST':
//         if (requestData) {
//           sendData(url, requestData);
//         }
//         break;
//       default:
//         break;
//     }
//   }, [url, method, requestData]);

//   return { data, error };
// }

import axios from 'axios';
import { useState, useEffect } from 'react';

export function useAPIService(url, method, requestData) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      const responseData = response.data;
      setData(responseData);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
      setData(null);
    }
  };

  useEffect(() => {
    switch(method){
      case 'GET' :
        getData(url);
        break;
      case 'POST':
        if (requestData) {
          sendData(url, requestData);
        }
        break;
      case 'UPDATE':
        if (requestData) {
          updateData(url, requestData);
        }
        break;
      case 'DELETE':
        deleteData(url);
        break;
      case 'PATCH':
         if (requestData) {
         patchData(url, requestData);
         }
          break;
      default:
        break;
    }
  }, [url, method, requestData]);

  return { data, error };
}