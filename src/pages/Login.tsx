import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import login from '../../public/images/login.png';
import NavBar from '../components/layout/NavBar';
import '../styles/Login.css'
import {User} from '../models/User'

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        setError("");
        console.log("Email:", email);
        console.log("Password:", password);

        const storedUser = localStorage.getItem("user");

        if (!storedUser) {

            setError(
                "Korisnik ne postoji. Prvo se registrujte."
            );

            return;
        }



        const userData = JSON.parse(storedUser);



        const user = new User(
            userData.name,
            userData.surname,
            userData.email,
            userData.password,
            []
        );



        if (user.email !== email) {

            setError(
                "Pogrešan e-mail ili password."
            );

            return;
        }



        if (!user.checkPassword(password)) {

            setError(
                "Pogrešan e-mail ili password."
            );

            return;
        }



        localStorage.setItem(
            "loggedUser",
            JSON.stringify(user)
        );

        navigate("/");

    };


  return (
    <>
      <NavBar/>
      <div className="login-page">

              <div className="login-container">


                  <div className="login-image">

                      <img
                          src={login}
                          alt="Login slika"
                      />

                    </div>



                  <div className="login-form-container">

                      <h1>Prijavi se</h1>


                      <form onSubmit={handleSubmit}>

                          <input
                              type="email"
                              placeholder="E-mail"
                              value={email}
                              onChange={(e) =>
                                  setEmail(e.target.value)
                              }
                              required
                          />


                          <input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) =>
                                  setPassword(e.target.value)
                              }
                              required
                          />
                          
                        {error && (
                            <p className="login-error">
                                {error}
                            </p>
                        )}

                          <button
                              type="submit"
                              className="login-button"
                          >
                              Uloguj se
                          </button>

                      </form>


                      <p className="register-text">

                          Nemaš nalog?  
                          
                          <Link to="/signin">
                               Napravi ga ovde
                          </Link>

                      </p>

                  </div>

              </div>

          </div>
          </>
  )
}

export default Login