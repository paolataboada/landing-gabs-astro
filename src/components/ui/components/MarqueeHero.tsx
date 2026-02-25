import Marquee from "react-fast-marquee";
import type { IHeroCard } from "../../../data/hero-cards";

interface Props {
    cards: IHeroCard[];
}

const MarqueeHero = ({ cards }: Props) => {
    const firstGroupCards = cards.slice(0, 2);
    const secondGroupCards = cards.slice(2, 4);

    return (
        <div className="flex gap-6">
            <Marquee gradient={false} speed={50} direction="right" loop={0}>
                {Array(20).fill(secondGroupCards).flat().map((card: IHeroCard, index) => (
                    <img
                        key={index}
                        src={card.image.src}
                        alt={card.seoAlt}
                        className="w-[190px] h-[150px] ms-3 md:w-[260px] md:h-[210px] md:ms-4"
                        loading="lazy" 
                        decoding="async"
                    />
                ))}
            </Marquee>
            <Marquee gradient={false} speed={50} direction="left" loop={0}>
                {Array(20).fill(firstGroupCards).flat().map((card, index) => (
                    <img
                        key={index}
                        src={card.image.src}
                        alt={card.seoAlt}
                        className="w-[190px] h-[150px] ms-3 md:w-[260px] md:h-[210px] md:ms-4"
                        loading="lazy" 
                        decoding="async"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeHero;