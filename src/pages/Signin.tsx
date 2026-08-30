import React from 'react'
import signin from '../../public/images/signin.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Signin.css';
import NavBar from '../components/layout/NavBar';
import {User} from '../models/User';



function Signin() {
  const navigate = useNavigate();

  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      console.log({
            ime,
            prezime,
            email,
            password
      });
      setError("");

      const existingUser = localStorage.getItem("user");

        if (existingUser) {

            const userData = JSON.parse(existingUser);

            if (userData.email === email) {

                setError(
                    "Korisnik sa ovim e-mailom već postoji."
                );

                return;
            }
        }


        const user = new User(
            ime,
            prezime,
            email,
            password,
            []
        );


        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );



      navigate("/login");
    };

  return (
    <>
    <NavBar/>
    <div className="signin-page">

      <div className="signin-container">
        <div className="signin-image">
          <img
            src={signin}
            alt="Signin slika"
          />
        </div>


        <div className="signin-form-container">

          <h1>Registruj se</h1>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Ime"
                value={ime}
                onChange={(e) =>
                    setIme(e.target.value)
                }
                required
              />


              <input
                  type="text"
                  placeholder="Prezime"
                  value={prezime}
                  onChange={(e) =>
                      setPrezime(e.target.value)
                  }
                  required
              />


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
                  <p className="signin-error">
                      {error}
                  </p>
              )}

              <button
                  type="submit"
                  className="signin-button"
              >
                  Napravi nalog
              </button>

            </form>

        </div>

      </div>

    </div>
    </>
  )
}

export default Signin