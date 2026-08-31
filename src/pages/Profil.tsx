import React from 'react'
import {User} from '../models/User'
import { CgProfile } from "react-icons/cg";
import '../styles/Profil.css'
import StazaCard from '../components/StazaCard';
import { useState, useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import {staze } from '../data/staze';
import '../styles/StazaCard.css'

function Profil() {

  const [user, setUser] = useState<User | null>(null);
 
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    console.log("Profil----",storedUser)
    if (storedUser) {
      const userData = JSON.parse(storedUser);
 
      const loadedUser = new User(
        userData.name,
        userData.surname,
        userData.email,
        userData.password,
        userData.favorites
      );
      console.log(loadedUser);
      setUser(loadedUser);
    }
  }, []);
 
  if (!user) {
    return null;
  }



  return (
    <div className="profile">
      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-i">
            <CgProfile  className="profile-icon" />
          </div>
          <p className="profile-name">
            {user.getFullName()}
          </p>
        </div>
 
        <div className="profile-right">
          <div className="profile-email">
            <MdEmail className="profile-email-icon" />
            <span className="profile-email-text">E-mail: {user.email}</span>
          </div>
 
          <div className="profile-omiljene">
            <FaHeart className="profile-icon-heart" fill="currentColor" />
            <span className="profile-omiljene-text">
              Omiljene staze
            </span>
          </div>
 
          <div className="profile-omiljene-card">
            {user.favorites.map((favoriteId, index) => {
              const trail = staze.find(s => s.id === favoriteId);
              return trail ? (
                <StazaCard 
                  key={trail.id} 
                  staza={trail} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil