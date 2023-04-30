import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/andro.png';
import resume from "../assets/resume.pdf"

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-400 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-60'>
        <div className="flex justify-between items-center text-white">
            {/* <img src={logo} className="App-logo w-10" alt="logo" /> */}
            <FontAwesomeIcon size='2xl' className="App-logo w-10" alt="logo" icon={faAndroid} />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#projects" className="hover:underline">Projects</a></li>
            <li className="p-4"><a href="#contacts" className="hover:underline">Contacts</a></li>
            </ul>
        </div>
    </div>
    )
}
