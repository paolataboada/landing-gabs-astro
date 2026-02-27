import { useState } from "react";
import WhatsappIcon from "@assets/icons/whatsapp-icon.svg";
import { CONTACT_LINKS } from "@/constants/contact";

interface Props {
  className?: string;
}

const DEFAULT_BG = "linear-gradient(270deg, var(--brand-orange) 0%, var(--brand-pink) 100%)";
const HOVER_BORDER = "linear-gradient(98.71deg, var(--brand-orange) -0.15%, var(--brand-pink) 99.85%)";

const ChatButton: React.FC<Props> = ({ className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      aria-label="Chat with us"
      className={`group relative inline-block rounded-full w-full sm:w-fit cursor-pointer overflow-hidden transition-all duration-300 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-[inherit] transition-all duration-300"
        style={{
          background: hovered ? "transparent" : DEFAULT_BG,
          zIndex: 0,
        }}
      />

      <div
        className="absolute inset-0 rounded-[inherit] transition-all duration-300"
        style={{
          background: hovered ? HOVER_BORDER : "transparent",
          zIndex: 0,
          padding: "2px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative flex items-center justify-center gap-[10px] py-[13px] px-6 overflow-hidden">
        <span
          className="font-semibold text-lg whitespace-nowrap
          transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:translate-x-[30px]"
        >
          Chat with us
        </span>

        <img
          src={WhatsappIcon.src}
          alt="Whatsapp Icon"
          className="w-6 h-6 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:-translate-x-[125px]"
        />
      </div>
    </a>
  );
};

export default ChatButton;