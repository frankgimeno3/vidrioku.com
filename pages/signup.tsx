import React, { useState } from "react";
import { useRouter } from "next/router";
// import { useFirebaseApp } from 'reactfire';
import { createUserWithEmailAndPassword } from 'firebase/auth';   
import {auth} from '../firebase.js'
// import { showmessage } from "../components/showmessage.js";


export default function Signup() {
    // const firebaseApp = useFirebaseApp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                // showmessage("Email already in use", "error")
                alert("Email already in use")
              } else if (error.code === 'auth/invalid-email') {
                // showmessage("Invalid email", "error")
                alert("Invalid email")
              } else if (error.code === 'auth/weak-password') {
                // showmessage("Weak password", "error")
                alert("Weak password")
              } else if (error.code) {
                // showmessage("Something went wrong", "error")
                alert("Something went wrong")
              }
            }
    };

    return (
        <div className="bg-white">
           
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="mt-24 w-full py-16 z-10 text-gray-800">
                    <h1 className="w-full text-center font-bold text-4xl text-white">
                        REGISTRO
                    </h1>
 
                    <div className="md:mx-24 md:px-24 mt-5">
                        <form className="md:mx-24 text-center md:px-24 py-5" onSubmit={handleSignup}>
                            <div className="mb-4 mx-16">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Ingrese su correo electrónico"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="mb-4 mx-16">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 border-2 rounded-lg bg-gray-100 bg-opacity-90 text-black placeholder-black"
                                    placeholder="Ingrese su contraseña"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black rounded-lg shadow-lg px-5 py-3 lg:font-bold mx-5 text-sm"
                            >
                                REGISTRARSE
                            </button>
                        </form>
                    </div>
                </div>
                 
            </div>
        </div>
    );
}