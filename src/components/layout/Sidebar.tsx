import React from 'react'
import { NavLink } from 'react-router-dom'
import { LiaHomeSolid } from "react-icons/lia";
import { FaHiking } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className='sidebar'>
        <nav>
            <NavLink to={"/"}>
                <LiaHomeSolid />
                <span>Početna</span>
            </NavLink>

            <NavLink to={"/setnja"}>
                <FaHiking />
                <span>Šetnja</span>
            </NavLink>

            <NavLink to={"/biciklizam"}>
                <FaBiking />
                <span>Biciklizam</span>
            </NavLink>

            <NavLink to={"/galerija"}>
                <FaImages />
                <span>Galerija</span>
            </NavLink>

            <NavLink to={"/vreme"}>
                <FaCloudSun />
                <span>Vreme</span>
            </NavLink>
        </nav>
    </aside>
  )
}

export default Sidebar