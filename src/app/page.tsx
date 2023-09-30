import React from "react";

import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured";
import TrustedBy from "@/components/TrustedBy";

import { Slide } from "@/components/Slide";
import { cards, projects } from "../data";
import CategoryCard from "@/components/CategoryCard";

import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
import FeatureFour from "@/components/FeatureFour";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const App = () => {
	return (
		<>
			<Navbar />
			<Featured />
			<TrustedBy />
			<Slide slidesToShow={2} arrowsScroll={1}>
				{cards.map((card) => (
					<CategoryCard key={card.id} item={card} />
				))}
			</Slide>
			<FeatureTwo />
			<FeatureThree />
			<FeatureFour />
			<Slide slidesToShow={4} arrowsScroll={4}>
				{projects.map((card) => (
					<ProjectCard key={card.id} item={card} />
				))}
			</Slide>
			<Footer />
		</>
	);
};

export default App;

{
	/* <DemoCarousel imagesToPass={1} imagesToShow={1} /> */
}
