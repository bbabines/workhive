"use client";

import React, { useState, useRef } from "react";

type SlideProps = {
	slidesToShow: number;
	arrowsScroll: number;
	children: React.ReactNode[];
};

export const Slide: React.FC<SlideProps> = ({
	slidesToShow,
	arrowsScroll,
	children,
}) => {
	const [current, setCurrent] = useState<number>(0);

	const slideRef = useRef<HTMLDivElement>(null);

	const handleNext = () => {
		if (current < children.length - slidesToShow) {
			setCurrent(current + arrowsScroll);
		} else {
			setCurrent(0); // Infinite loop
		}
	};

	const handlePrev = () => {
		if (current > 0) {
			setCurrent(current - arrowsScroll);
		} else {
			setCurrent(children.length - slidesToShow); // Infinite loop
		}
	};

	return (
		<div className="w-[100%] mb-8 relative flex justify-center">
			<button
				onClick={handlePrev}
				className="w-[50px] absolute top-[50%] right-[90%] text-[1.5rem] font-bold bg-[lightgrey] opacity-70 rounded-full z-[2]"
			>
				&lt;
			</button>
			<div className="overflow-hidden" ref={slideRef}>
				<div
					className="flex transition-transform duration-300 gap-[40px]"
					style={{
						transform: `translateX(-${current * (60 / slidesToShow)}%)`,
					}}
				>
					{children}
				</div>
			</div>
			<button
				onClick={handleNext}
				className="w-[50px] absolute top-[50%] left-[90%] text-[1.5rem] font-bold bg-[lightgrey] opacity-70 rounded-full"
			>
				&gt;
			</button>
		</div>
	);
};
