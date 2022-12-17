import './Header.css';
// images import 
import header_logo from '../../assets/images/header_logo.svg';
// icons import
import { FiSearch } from 'react-icons/fi';
import { SlHandbag } from 'react-icons/sl';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
const Header = () => {
    return (
        <header className='header'>
            <div className="header-content">
                <span>
                    <img className='header-logo' src={header_logo} alt="logo" />
                </span>
                <ul className="navbar-item">
                    <li className="navbar-list">Home</li>
                    <li className="navbar-list">Products</li>
                    <li className="navbar-list">About</li>
                    <li className="navbar-list">Reviews</li>
                </ul>
                <div className="header-right">
                    <span className='header-icons'><FiSearch /></span>
                    <span className='header-icons'><SlHandbag /></span>
                    <span className='header-icons'><AiOutlineUser /></span>
                </div>
                <span className='header-menu'><AiOutlineMenu /></span>
            </div>
        </header >
    )
}
export default Header;