import React from "react";

import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured";
import TrustedBy from "@/components/TrustedBy";

import DemoCarousel from "@/components/DemoCarousel";
import FeatureTwo from "@/components/FeatureTwo";

const App = () => {
	return (
		<>
			<Navbar />
			<Featured />
			<TrustedBy />
			<DemoCarousel imagesToPass={1} imagesToShow={1} />
			<FeatureTwo />
		</>
	);
};

export default App;
