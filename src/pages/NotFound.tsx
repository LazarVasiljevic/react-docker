import React from 'react'
import { GiMountainRoad } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import '../styles/NotFound.css'

function NotFound() {
  return (
    <section className='not-found'>
      <div >
        <GiMountainRoad className='not-found-icon'/>
      </div>

      <h1>
        404 – Page not found
      </h1>
      <p>
        Zalutao si u nepoznato, vrati se na svoju pravu stazu.
      </p>

      <div >
        <NavLink
          to='/'
          className='not-found-item'
        >
          Vrati se na početnu
        </NavLink>
      </div>
    </section>

  )
}

export default NotFound