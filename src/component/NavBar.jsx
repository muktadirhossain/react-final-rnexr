import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <Link to="/">
                <img src={logo} alt="Logo" className='w-16' />
            </Link>
            <ul className='flex justify-evenly gap-x-4'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500" : ""
                        }
                        to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>


            <Link to="/logout" >Logout</Link>
        </nav>
    )
}

export default NavBar