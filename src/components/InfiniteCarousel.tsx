"use client";
import React, { useState } from "react";

import CategoryCard from "./CategoryCard";
import { cards } from "../data";

type InfiniteCarouselProp = {
	items: any;
};

const InfiniteCarousel = ({ items }: InfiniteCarouselProp) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((currentIndex + 5) % items.length);
	};

	const handlePrev = () => {
		setCurrentIndex((currentIndex - 5 + items.length) % items.length);
	};

	return (
		<div>
			<button onClick={handlePrev}>Previous</button>

			<div className="">
				{/* Slide */}
				<div className="flex">
					{/* Container */}
					{cards.map((card) => (
						<CategoryCard item={card} key={card.id} />
					))}
				</div>

				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
};

export default InfiniteCarousel;
