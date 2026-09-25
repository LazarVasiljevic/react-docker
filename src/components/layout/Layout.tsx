import NavBar from './NavBar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import "../../styles/Layout.css";

function Layout() {
  return (
    <div className='layout'>
        <NavBar/>
        <Sidebar/>
        <main className='main-content'>
            <Outlet/>
        </main>
    </div>
)
}

export default Layout