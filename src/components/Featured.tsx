import React from "react";

const Featured = () => {
	return (
		<div className="h-[600px] flex justify-center bg-[#013916]">
			{/* Featured */}
			<div className="w-[1400px] flex items-center">
				{/* Container */}
				<div className="flex flex-col gap-[30px] text-white">
					{/* Left */}
					<h1 className="text-[2rem]">
						Find the perfect <i className="font-light">freelance</i> services
						for your business
					</h1>
					<div className="flex items-center justify-between bg-white rounded-md">
						{/* Search */}
						<div className="flex items-center gap-2">
							{/* Search input */}
							<img
								src="search.png"
								alt="a search icon"
								className="w-[20px] h-[20px] m-[10px]"
							/>
							<input
								type="text"
								placeholder="Try 'building mobile app'"
								className="outline-none border-none"
							/>
						</div>
						<button className="w-[120px] h-[50px] cursor-pointer bg-[#1dbf73] border-none">
							Search
						</button>
					</div>
					<div className="flex items-center gap-2">
						{/* Popular: */}
						<span>Popular</span>
						<button className="text-white bg-transparent border-2 border-[white] py-[5px] px-[10px] rounded-2xl text-sm">
							Web Design
						</button>
						<button className="text-white bg-transparent border-2 border-[white] py-[5px] px-[10px] rounded-2xl text-sm">
							Wordpress
						</button>
						<button className="text-white bg-transparent border-2 border-[white] py-[5px] px-[10px] rounded-2xl text-sm">
							Logo Design
						</button>
						<button className="text-white bg-transparent border-2 border-[white] py-[5px] px-[10px] rounded-2xl text-sm">
							AI Services
						</button>
					</div>
				</div>
				<div className="h-[100%]">
					{/* Right */}
					<img
						src="man.png"
						alt="an image of a man"
						className="h-[100%] object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default Featured;
