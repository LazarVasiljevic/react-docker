import React from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
function NavBar() {

  const navigate = useNavigate();

  return (
    <header className='navbar'>
      <div className='logo'>HIGHKING</div>
      <button className='profile-button'
        onClick={() => navigate("/profil")}
        >
          <CgProfile />
      </button>
    </header>
  )
}

export default NavBar