import React from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
function NavBar() {

  const navigate = useNavigate();

  return (
    <header className='bg-emerald-800 text-emerald-50 shadow-md'>
      <div className='font-bold text-lg tracking-wide'>HIGHKING</div>
      <button className='profile-button'
        onClick={() => navigate("/profil")}
        >
          <CgProfile />
      </button>
    </header>
  )
}

export default NavBar