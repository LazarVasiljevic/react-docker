import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import login from '../../public/images/login.png';
import NavBar from '../components/layout/NavBar';
import '../styles/Login.css'

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        // Za sada samo demonstracija prijave
        navigate("/");

    };


  return (
    <>
      <NavBar/>
      <div className="login-page">

              <div className="login-container">

                  {/* LEVA STRANA */}

                  <div className="login-image">

                      <img
                          src={login}
                          alt="Planinski pejzaž"
                      />

                    </div>


                  {/* DESNA STRANA */}

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