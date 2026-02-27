import { useEffect, useState } from 'react';

type Props = {
    to: string;
    text: string;
    offset?: number;
    className?: string;
    onClick?: () => void;
};

const MENU_ITEM_CLASS = `font-normal text-white text-2xl leading-[130%] 
    transition-colors cursor-pointer select-none bg-transparent border-none p-0 outline-none
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
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const atBottom = scrollY + windowHeight >= docHeight - 10;

            let activeId: string | null = null;

            if (atBottom) {
                activeId = SECTIONS[SECTIONS.length - 1];
            } else {
                let closestId: string | null = null;
                let closestDistance = Infinity;
                const threshold = 150;

                for (const id of SECTIONS) {
                    const el = document.getElementById(id);
                    if (!el) continue;

                    const rect = el.getBoundingClientRect();
                    if (rect.top <= threshold) {
                        const distance = Math.abs(rect.top - threshold);
                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closestId = id;
                        }
                    }
                }

                activeId = closestId;
            }

            setActive(activeId === to);
        };

        window.addEventListener("scroll", checkActive, { passive: true });
        const timeout = setTimeout(checkActive, 100);

        return () => {
            window.removeEventListener("scroll", checkActive);
            clearTimeout(timeout);
        };
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
        <button
            type="button"
            onClick={handleClick}
            className={`${MENU_ITEM_CLASS} ${active ? MENU_ITEM_ACTIVE_CLASS : ""} ${className ?? ""}`}
        >
            {text}
        </button>
    );
};

export default NavLink;