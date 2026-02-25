import type { ImageMetadata } from "astro";
import OldenRagon from '@images/popular-games/Games.png';
import UltraPanda from '@images/popular-games/Games (1).png';
import CashMachine from '@images/popular-games/Games (2).png';
import Game3 from '@images/popular-games/Games (3).png';
import ColorfulOrchard from '@images/popular-games/Games (4).png';
import CrazyBirds from '@images/popular-games/Games (5).png';
import DragonSlayer from '@images/popular-games/Games (6).png';
import FireKirin from '@images/popular-games/Games (7).png';
import FishermansWharf from '@images/popular-games/Games (8).png';
import FruitMary from '@images/popular-games/Games (9).png';
import GhostsNGoblins from '@images/popular-games/Games (10).png';
import GodOfFortune from '@images/popular-games/Games (11).png';
import HaiDilao from '@images/popular-games/Games (12).png';
import HappyDuck from '@images/popular-games/Games (13).png';
import HappyHour from '@images/popular-games/Games (14).png';

export interface IPopularGame {
    name: string;
    image: ImageMetadata;
    seoAlt: string;
}

export const popular_games: IPopularGame[] = [
    {
        name: 'Olden Ragon',
        image: OldenRagon,
        seoAlt: "Olden Ragon"
    },
    {
        name: 'Ultra Panda',
        image: UltraPanda,
        seoAlt: "Ultra Panda"
    },
    {
        name: 'Cash Machine',
        image: CashMachine,
        seoAlt: "Cash Machine"
    },
    {
        name: 'Game 3',
        image: Game3,
        seoAlt: "Game 3"
    },
    {
        name: 'Colorful Orchard',
        image: ColorfulOrchard,
        seoAlt: "Colorful Orchard"
    },
    {
        name: 'Crazy Birds',
        image: CrazyBirds,
        seoAlt: "Crazy Birds"
    },
    {
        name: 'Dragon Slayer',
        image: DragonSlayer,
        seoAlt: "Dragon Slayer"
    },
    {
        name: 'Fire Kirin',
        image: FireKirin,
        seoAlt: "Fire Kirin"
    },
    {
        name: "Fisherman's Wharf",
        image: FishermansWharf,
        seoAlt: "Fisherman's Wharf"
    },
    {
        name: 'Fruit Mary',
        image: FruitMary,
        seoAlt: "Fruit Mary"
    },
    {
        name: 'Ghosts N Goblins',
        image: GhostsNGoblins,
        seoAlt: "Ghosts N Goblins"
    },
    {
        name: 'God Of Fortune',
        image: GodOfFortune,
        seoAlt: "God Of Fortune"
    },
    {
        name: 'Hai Dilao',
        image: HaiDilao,
        seoAlt: "Hai Dilao"
    },
    {
        name: 'Happy Duck',
        image: HappyDuck,
        seoAlt: "Happy Duck"
    },
    {
        name: 'Happy Hour',
        image: HappyHour,
        seoAlt: "Happy Hour"
    },
]