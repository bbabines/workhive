"use client";

import React, { useState } from "react";

import CategoryCard from "./CategoryCard";
import { cards } from "../data";

// Need to find a better solution for a carousel

const DemoCarousel = ({ imagesToShow, imagesToPass }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => prevIndex + imagesToPass);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => prevIndex - imagesToPass);
	};

	// Generate an array of images
	const images = Array.from({ length: imagesToShow }, (_, index) => index);

	// Calculate the actual index based on the length of the images array
	const actualIndex = currentIndex % images.length;

	// Get the subset of images to display
	const displayedImages = images.slice(actualIndex, actualIndex + imagesToShow);

	return (
		<div>
			<button onClick={handlePrev}>Previous</button>
			<div className="">
				{/* Slide */}
				<div className="flex gap-3">
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

export default DemoCarousel;
