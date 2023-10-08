import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Agregamos un estado para el mensaje de error

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }; 

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);
            alert("Welcome " + userCredentials.user.email);
        } catch (error) {
            console.log(error)
            if (error === 'auth/wrong-password') {
                setErrorMessage("Contraseña incorrecta");
            } else if (error === 'auth/user-not-found') {
                setErrorMessage("Usuario no encontrado");
            } else {
                setErrorMessage("Algo salió mal");
            }
        }
    };

    return (
        <div className="bg-black">
            <div className="h-screen flex flex-col justify-center items-center relative">
                <div className="mt-24 w-full py-16 z-10 text-gray-800">
                    <h1 className="w-full text-center font-bold text-4xl text-white">
                        REGISTRO
                    </h1>
                    <div className="md:mx-24 md:px-24 mt-5">
                        <form className="md:mx-24 text-center md:px-24 py-5" onSubmit={handleLogin}>
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
                            {errorMessage && (
                                <div className="mb-4 mx-16 text-red-500">
                                    {errorMessage}
                                </div>
                            )}
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