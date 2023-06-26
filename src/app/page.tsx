import React from "react";

import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured";
import TrustedBy from "@/components/TrustedBy";
import InfiniteCarousel from "@/components/InfiniteCarousel";

import { cards } from "@/data";

const App = () => {
	return (
		<>
			<Navbar />
			<Featured />
			<TrustedBy />
			<InfiniteCarousel items={cards} />
		</>
	);
};

export default App;
