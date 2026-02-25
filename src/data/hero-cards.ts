import Game01 from "@images/hero/screen-game-01.png";
import Game02 from "@images/hero/screen-game-02.png";
import Game03 from "@images/hero/screen-game-03.png";
import Game04 from "@images/hero/screen-game-04.png";

export interface IHeroCard {
    image: ImageMetadata;
    seoAlt: string;
}

export const hero_cards: IHeroCard[] = [
    {
        image: Game01,
        seoAlt: 'Fishing Games Macau',
    },
    {
        image: Game02,
        seoAlt: 'Spin Wheel Macau',
    },
    {
        image: Game03,
        seoAlt: 'Fishing Games Casino Macau',
    },
    {
        image: Game04,
        seoAlt: 'Slot Games Casino Macau',
    },
]