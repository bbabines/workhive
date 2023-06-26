import React from "react";

import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured";
import TrustedBy from "@/components/TrustedBy";

import DemoCarousel from "@/components/DemoCarousel";

const App = () => {
	return (
		<>
			<Navbar />
			<Featured />
			<TrustedBy />
			<DemoCarousel imagesToPass={1} imagesToShow={1} />
		</>
	);
};

export default App;
