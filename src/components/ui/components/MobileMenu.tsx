import { useState } from "react";
import LogoGabs from "@images/logos/gabs.png";
import MenuIcon from "@icons/menu-icon.svg";
import CloseIcon from "@icons/close-icon.svg";
import WhatsappIcon from "@icons/whatsapp-icon.svg";
import NavLink from "../elements/NavLink";
import GradientBorderContainer from "./GradientBorderContainer.astro";
import { CONTACT_LINKS } from "@/constants/contact";

const MACAU_TELEGRAM = 'https://t.me/';

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

                <div className="grid justify-center mb-8">
                    <div id="mobile_menu_container" className="relative inline-block rounded-full w-fit mx-auto cursor-pointer">
                        <div id="mobile_menu_background" className="absolute inset-0 bg-transparent rounded-full z-0" />
                        <div id="mobile_menu_content" className="relative z-5">
                            <a
                                href={CONTACT_LINKS.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat with our support team now"
                                className="flex items-center gap-[10px] rounded-full py-[13px] px-6 group">
                                <span 
                                    className="font-semibold text-lg drop-shadow-[0px_0px_12px_rgba(255,255,255,0.56)] 
                                    transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                                    group-hover:translate-x-8 md:group-hover:translate-0 md:w-min 
                                    lg:group-hover:translate-x-8 lg:w-auto">
                                    Chat With Us!
                                </span>
                                <img
                                    src={WhatsappIcon.src}
                                    alt="Arrow Left Icon"
                                    loading="lazy"
                                    className="w-6 h-6 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                                    group-hover:-translate-x-[105px] md:hidden md:group-hover:translate-0 
                                    lg:block lg:group-hover:-translate-x-[105px]"
                                />
                            </a>
                        </div>
                        <div
                            id="mobile_menu_border_gradient"
                            className="absolute inset-0 bg-linear-to-r from-(--brand-orange) to-(--brand-pink)
                            z-0 rounded-full p-0.5"
                            style={{
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MobileMenu;