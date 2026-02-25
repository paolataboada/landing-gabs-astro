import type { IPopularGame } from "@data/popular-games"

interface Props {
    games: IPopularGame[];
}

const LobbyPopularGames = ({ games }: Props) => {
    const row1 = games.slice(0, 3);   
    const row2 = games.slice(3, 9);   
    const row3 = games.slice(9, 15);  

    return (
        <div className="relative flex flex-col max-w-[1200px] mx-auto">
            <div className="grid grid-cols-3 gap-6 pb-6">
                {row1.map((game, index) => (
                    <img
                        key={index}
                        src={game.image.src}
                        alt={game.seoAlt}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>

            <div className="grid grid-cols-6 gap-6">
                {row2.map((game, index) => (
                    <img
                        key={index}
                        src={game.image.src}
                        alt={game.seoAlt}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>

            <div className="grid grid-cols-6 gap-6">
                {row3.map((game, index) => (
                    <img
                        key={index}
                        src={game.image.src}
                        alt={game.seoAlt}
                        className="w-full h-auto object-contain"
                    />
                ))}
            </div>
        </div>
    )
}

export default LobbyPopularGames