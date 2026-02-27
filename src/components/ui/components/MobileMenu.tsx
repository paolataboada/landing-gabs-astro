import { useState } from "react";
import LogoGabs from "@images/logos/gabs.png";
import MenuIcon from "@icons/menu-icon.svg";
import CloseIcon from "@icons/close-icon.svg";
import NavLink from "../elements/NavLink";
import ChatButton from "./ChatButton";

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button onClick={toggleMenu} className="block cursor-pointer relative z-5 md:hidden" aria-label="Open Menu">
                <img src={MenuIcon.src} alt="Menu Icon" className="w-8 h-8" />
            </button>

            {isOpen && <div className="fixed inset-0 bg-black/50 h-dvh z-5" onClick={closeMenu} />}

            <nav
                className={`fixed top-0 left-0 bg-(--background-01) border border-(--background-02) 
                rounded-b-[40px] w-full z-5 transition-transform duration-300 md:hidden
                ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex justify-between items-center py-2 px-4 border-b border-(--background-02)">
                    <a href="/" aria-label="Go to Homepage" className="cursor-pointer ms-4">
                        <img 
                            src={LogoGabs.src} 
                            alt="GABS"
                            className="h-[72px] w-[72px]" 
                            loading="lazy" 
                            decoding="async" 
                        />
                    </a>
                    <img 
                        src={CloseIcon.src} 
                        alt="Close Icon"
                        className="h-8 w-8 cursor-pointer" 
                        aria-label="Close Menu"
                        loading="lazy" 
                        decoding="async"
                        onClick={closeMenu}
                    />
                </div>

                <ul className="flex flex-col items-center gap-8 pt-8 pb-12">
                    <li><NavLink to="games" text="Games" onClick={closeMenu} /></li>
                    <li><NavLink to="features" text="Features" onClick={closeMenu} /></li>
                    <li><NavLink to="sweepstakes-platform" text="Sweepstakes Platform" onClick={closeMenu} /></li>
                </ul>

                <div className="flex justify-center mb-8 px-4">
                    <ChatButton alwaysShowBorder />
                </div>
            </nav>
        </>
    );
};

export default MobileMenu;