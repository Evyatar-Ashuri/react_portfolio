import logo from "../assets/evyatar-logo.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";

const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6 bg-transparent">
                <div className="flex flex-shrink-0 items-center">
                <img className="mx-2" src={logo} alt="logo" style={{ width: "150px" }} />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
