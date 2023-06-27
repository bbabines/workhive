"use client";

import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

// Need to find a better solution for a carousel

const DemoProjectCarousel = ({ imagesToShow, imagesToPass }) => {
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
			<div className="bg-[white] my-10">
				{/* Slide */}
				<div className="flex justify-center gap-3">
					{/* <button
						onClick={handlePrev}
						className=" h-[35px] w-[75px] text-black bg-transparent border-2 border-[black] py-[5px] px-[10px] rounded-2xl text-sm relative top-[150px]"
					>
						Previous
					</button> */}
					{/* Container */}

					{projects.map((project) => (
						<ProjectCard item={project} key={project.id} />
					))}
					{/* <button
						onClick={handleNext}
						className=" h-[35px] w-[75px] text-black bg-transparent border-2 border-[black] py-[5px] px-[10px] rounded-2xl text-sm relative top-[150px]"
					>
						Next
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default DemoProjectCarousel;
