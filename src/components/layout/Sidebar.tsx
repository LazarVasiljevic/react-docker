import { NavLink } from 'react-router-dom'
import { LiaHomeSolid } from "react-icons/lia";
import { FaHiking } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import '../../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className='sidebar'>
        <nav className='sidebar-nav'>
            <NavLink to={"/"} className='sidebar-item'>
                    <LiaHomeSolid />
                    <span>Početna</span>
            </NavLink>

            <NavLink to={"/setnja"} className='sidebar-item'>
                    <FaHiking />
                    <span>Šetnja</span>
            </NavLink>

            <NavLink to={"/biciklizam"} className='sidebar-item'>
                    <FaBiking />
                    <span>Biciklizam</span>
            </NavLink>

            <NavLink to={"/galerija"} className='sidebar-item'>
                    <FaImages />
                    <span>Galerija</span>
            </NavLink>

            <NavLink to={"/vreme"} className='sidebar-item'>
                    <FaCloudSun />
                    <span>Vreme</span>
            </NavLink>
        </nav>
    </aside>
  )
}

export default Sidebar