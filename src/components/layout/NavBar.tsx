import { CgProfile } from "react-icons/cg";
import "../../styles/NavBar.css";
import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  
  const navigate = useNavigate(); 

  useEffect(() => {

    const loggedUser = localStorage.getItem("loggedUser");

    setIsLoggedIn(loggedUser !== null);

  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {

    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <div className='navbar'>
      <div className='logo'>HIGHKING</div>
      <div className='profile-container' ref={profileRef}>
        <button className='profile-button' onClick={() => setIsOpen(!isOpen)}>
          <CgProfile />
        </button>

          {isOpen && (
          <div className="profile-dropdown">
            <NavLink to="/profil" className="dropdown-item" onClick={() => setIsOpen(false)}>
              Profil
            </NavLink>
            {!isLoggedIn && (

              <NavLink
                to="/login"
                className="dropdown-item"
                onClick={() => setIsOpen(false)}
              >
                Prijava
              </NavLink>

            )}


            
            {isLoggedIn && (

              <button
                className="dropdown-item logout-button"
                onClick={handleLogout}
              >
                Odjavi se
              </button>

            )}
          </div>
          )}
          
      </div>
    </div>
  )
}

export default NavBar