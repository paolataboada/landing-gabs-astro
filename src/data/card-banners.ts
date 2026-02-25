
import type { ImageMetadata } from 'astro';
import FishIcon from '@icons/fish-icon.svg';
import CrownIcon from '@icons/slot-icon.svg';
import ShootingIcon from '@icons/shooting-icon.svg';
import FishGames from '@images/banner-cards/FGSS62.png';
import SlotGames from '@images/banner-cards/Lotto1.png';
import ShootingGames from '@images/banner-cards/wild-gang-poster 1.png';

export interface ICardBanner {
    id: string;
    icon: ImageMetadata;
    image: ImageMetadata;
    title: string;
    description: string;
    link: string;
    seoAlt: string;
}

export const CARD_BANNERS: ICardBanner[] = [
    {
        id: '01',
        icon: FishIcon,
        image: FishGames,
        title: 'Fish Games',
        description: 'Best Fish Games available in the industry!',
        seoAlt: 'Fish Table Game Macau',
    },
    {
        id: '02',
        icon: CrownIcon,
        image: SlotGames,
        title: 'Slot Games',
        description: 'A vast collection of diverse and thrilling slot games',
        seoAlt: 'Slot Games Casino Macau',
    },
    {
        id: '03',
        icon: ShootingIcon,
        image: ShootingGames,
        title: 'Shooting Games',
        description: 'Test your skills and take the shot!',
        seoAlt: 'Shooting Games Macau',
    },
]