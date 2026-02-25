import type { ImageMetadata } from "astro";
import PandaMaster from '@images/popular-games/Games.png';
import UltraPanda from '@images/popular-games/Games (1).png';
import OldenRagon from '@images/popular-games/Games (2).png';
import OrionStars from '@images/popular-games/Games (3).png';
import AcerBook from '@images/popular-games/Games (4).png';
import Game from '@images/popular-games/Games (5).png';
import ClubVpower from '@images/popular-games/Games (6).png';
import MagicCity from '@images/popular-games/Games (7).png';
import Juwa from '@images/popular-games/Games (8).png';
import BlueDragon from '@images/popular-games/Games (9).png';
import Glamour from '@images/popular-games/Games (10).png';
import LegendFire from '@images/popular-games/Games (11).png';
import GameVault from '@images/popular-games/Games (12).png';
import GalaxyWorld from '@images/popular-games/Games (13).png';
import RiverSweeps from '@images/popular-games/Games (14).png';

export interface IPopularGame {
    name: string;
    image: ImageMetadata;
    seoAlt: string;
}

export const popular_games: IPopularGame[] = [
    {
        name: 'Panda Master',
        image: PandaMaster,
        seoAlt: "Panda Master"
    },
    {
        name: 'Ultra Panda',
        image: UltraPanda,
        seoAlt: "Ultra Panda"
    },
    {
        name: 'Olden Ragon',
        image: OldenRagon,
        seoAlt: "Olden Ragon"
    },
    {
        name: 'Orion Stars',
        image: OrionStars,
        seoAlt: "Orion Stars"
    },
    {
        name: 'Acer Book',
        image: AcerBook,
        seoAlt: "Acer Book"
    },
    {
        name: 'Game',
        image: Game,
        seoAlt: "Game"
    },
    {
        name: 'Club V Power',
        image: ClubVpower,
        seoAlt: "Club V Power"
    },
    {
        name: 'Magic City',
        image: MagicCity,
        seoAlt: "Magic City"
    },
    {
        name: 'Juwa',
        image: Juwa,
        seoAlt: "Juwa"
    },
    {
        name: 'Blue Dragon',
        image: BlueDragon,
        seoAlt: "Blue Dragon"
    },
    {
        name: 'Glamour',
        image: Glamour,
        seoAlt: "Glamour"
    },
    {
        name: 'Legend Fire',
        image: LegendFire,
        seoAlt: "Legend Fire"
    },
    {
        name: 'Game Vault',
        image: GameVault,
        seoAlt: "Game Vault"
    },
    {
        name: 'Galaxy World',
        image: GalaxyWorld,
        seoAlt: "Galaxy World"
    },
    {
        name: 'River Sweeps',
        image: RiverSweeps,
        seoAlt: "River Sweeps"
    },
]