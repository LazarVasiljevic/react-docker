import React from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import "../../styles/NavBar.css";


function NavBar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='logo'>HIGHKING</div>
      <button className='profile-button'
        onClick={() => navigate("/profil")}
        >
          <CgProfile />
      </button>
    </div>
  )
}

export default NavBar