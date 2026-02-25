import { useEffect, useState } from 'react';

type Props = {
    to: string;
    text: string;
    offset?: number;
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
    offset = -88,
    className,
    onClick,
}) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const checkActive = () => {
            const el = document.getElementById(to);
            if (!el) return;

            const rect = el.getBoundingClientRect();
            setActive(rect.top <= 120 && rect.bottom > 0);
        };

        window.addEventListener("scroll", checkActive, { passive: true });
        checkActive();

        return () => window.removeEventListener("scroll", checkActive);
    }, [to]);

    const handleClick = () => {
        const el = document.getElementById(to);
        if (!el) return;

        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
        window.history.pushState(null, "", `#${to}`);
        onClick?.();
    };

    return (
        <span
            onClick={handleClick}
            className={`${MENU_ITEM_CLASS} ${active ? MENU_ITEM_ACTIVE_CLASS : ""} ${className ?? ""}`}
        >
            {text}
        </span>
    );
};

export default NavLink;