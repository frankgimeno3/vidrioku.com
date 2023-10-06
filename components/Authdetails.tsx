// import { onAuthStateChanged } from "firebase/auth";
// import React, {useEffect, useState} from "react";
// import {auth} from "../firebase"

// const Autdetails = () => {
//     const [authUser, setAuthUser] = useState(null);

//     useEffect(()=>{
//         const listen = onAuthStateChanged (auth, (user) => {
//             if (user) {
//                 setAuthUser(user) 
//             } else {
//                 setAuthUser(null)
//             }
//         })
//     }, [])

//     return(
//         <div>
//             {authUser ? <p>Signed in as {authUser.email}</p>: <p>Signed out</p>}
//         </div>
//     )
// }

// export default Autdetails;