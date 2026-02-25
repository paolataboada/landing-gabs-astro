import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

type Props = {
    to: string;
    text: string;
    offset?: number;
    duration?: number;
    className?: string;
    onClick?: () => void;
};

const MENU_ITEM_CLASS = `font-normal text-white text-2xl leading-[130%] 
    transition-colors cursor-pointer
    md:text-[var(--base-grey)] md:text-base md:leading-[130%]`;

const MENU_ITEM_ACTIVE_CLASS = `font-semibold !text-white 
    drop-shadow-[0px_0px_12px_rgba(255,255,255,0.56)]`;
  
const NavLink: React.FC<Props> = ({
    to,
    text,
    offset = -80,
    duration = 500,
    className,
    onClick,
}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const checkHash = () => {
            setActive(window.location.hash === `#${to}`);
        };

        window.addEventListener("hashchange", checkHash);
        checkHash();

        return () => window.removeEventListener("hashchange", checkHash);
    }, [to]);

    const handleClick = () => {
        window.history.pushState(null, "", `#${to}`);
        window.dispatchEvent(new Event("hashchange"));
        onClick && onClick();
    };

    return (
        <Link
            href={`#${to}`}
            to={to}
            onClick={handleClick}
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
            className={`${MENU_ITEM_CLASS} ${active ? MENU_ITEM_ACTIVE_CLASS : ""} ${className}`}>
            {text}
        </Link>
    );
};

export default NavLink;