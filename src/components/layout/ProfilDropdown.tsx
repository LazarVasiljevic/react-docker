import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "../../styles/ProfilDropdown.css";


function ProfilDropdown() {

const [open, setOpen] = useState(false);

  return (
    <div className="profile-dropdown">
        <button
            className="profile-button"
            onClick={() => setOpen(!open)}
        >
            <CgProfile/>
        </button>


        {open && (

            <div className="profile-menu">

                <Link
                    to="/profil"
                    onClick={() => setOpen(false)}
                >
                    Profil
                </Link>

                <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                >
                    Prijavi se
                </Link>

            </div>

        )}

    </div>
  )
}

export default ProfilDropdown