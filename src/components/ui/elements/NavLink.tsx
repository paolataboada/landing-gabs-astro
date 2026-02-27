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

const SECTIONS = ["games", "features", "sweepstakes-platform"];

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
            let closestId: string | null = null;
            let closestDistance = Infinity;

            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                const threshold = 120;
                if (rect.top <= threshold) {
                    const distance = Math.abs(rect.top - threshold);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestId = id;
                    }
                }
            }

            setActive(closestId === to);
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