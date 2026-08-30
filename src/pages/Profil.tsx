import React from 'react'
import {User} from '../models/User'

import '../styles/Profil.css'

function Profil() {

const storedUser = localStorage.getItem("loggedUser");

if (storedUser) {

    const userData = JSON.parse(storedUser);

    const user = new User(
        userData.name,
        userData.surname,
        userData.email,
        userData.password,
        []
    );

    console.log(user.getFullName());
}



  return (
    <div>Profil</div>
  )
}

export default Profil