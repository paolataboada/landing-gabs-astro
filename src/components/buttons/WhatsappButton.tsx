import { CONTACT_LINKS } from "@constants/contact";
import IconWhatsappFill from "@/components/icons/IconwhatsappFill";


export const WhatsappButton = () => {
  return (
    <div className="absolute right-0 bottom-0 flex flex-col items-center justify-center gap-4 px-8 py-10">
      <a
       href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="whatsapp-button">
          <IconWhatsappFill className="w-10 h-10 text-white" />
        </button>
      </a>
    </div>
  );
};