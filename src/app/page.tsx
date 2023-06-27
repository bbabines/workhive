import React from "react";

import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured";
import TrustedBy from "@/components/TrustedBy";

import DemoCarousel from "@/components/DemoCarousel";
import DemoProjectCarousel from "../components/DemoProjectCarousel";
import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
import FeatureFour from "@/components/FeatureFour";

const App = () => {
	return (
		<>
			<Navbar />
			<Featured />
			<TrustedBy />
			<DemoCarousel imagesToPass={1} imagesToShow={1} />
			<FeatureTwo />
			<FeatureThree />
			<FeatureFour />
			<DemoProjectCarousel imagesToPass={1} imagesToShow={1} />
		</>
	);
};

export default App;
