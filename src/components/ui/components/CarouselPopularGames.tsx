import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from 'embla-carousel';
import type { IPopularGame } from "@data/popular-games";
import { useCallback, useEffect, useState } from "react";
import "../../../styles/embla.css";

type Props = {
	games: IPopularGame[]
}

const ITEMS_PER_VIEW = 9;

const options: EmblaOptionsType = {};

const CarouselPopularGames = ({ games }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	const slides = Array.from({ length: Math.ceil(games.length / ITEMS_PER_VIEW) }, (_, index) =>
		games.slice(index * ITEMS_PER_VIEW, (index + 1) * ITEMS_PER_VIEW)
	);	  

	const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slideGames, index) => (
						<div className="embla__slide" key={index}>
							<div className="grid-container">
								{slideGames.map((game, gameIndex) => (
									<div className="game-card" key={gameIndex}>
										<img src={game.image.src} alt={game.name} className="game-image" />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Dots */}
			<div className="embla__dots">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`dot ${index === selectedIndex ? "dot--active" : ""}`}
						onClick={() => scrollTo(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default CarouselPopularGames