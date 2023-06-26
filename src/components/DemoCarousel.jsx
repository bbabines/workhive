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
			<div className="w=[1400px]">
				{/* Slide */}
				<div className="flex justify-center gap-3">
					<button
						onClick={handlePrev}
						className=" h-[35px] w-[75px] text-black bg-transparent border-2 border-[black] py-[5px] px-[10px] rounded-2xl text-sm relative top-[150px]"
					>
						Previous
					</button>
					{/* Container */}

					{cards.map((card) => (
						<CategoryCard item={card} key={card.id} />
					))}
					<button
						onClick={handleNext}
						className=" h-[35px] w-[75px] text-black bg-transparent border-2 border-[black] py-[5px] px-[10px] rounded-2xl text-sm relative top-[150px]"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default DemoCarousel;
