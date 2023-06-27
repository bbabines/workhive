import React from "react";

const FeatureTwo = () => {
	return (
		<div className="bg-[#f1fdf7] flex justify-center py-[100px] px-[0px]">
			<div className="w-[1400px] flex items-center gap-[25px]">
				<div className="flex flex-col gap-3">
					<h2 className="text-[1.5rem] font-medium mb-[10px]">
						A whole world of freelance talent at your fingertips
					</h2>

					<div className="flex items-center gap-2 font-medium">
						<img src="check.png" alt="a checkmark" />
						The best for every budget
					</div>
					<p className="text-[grey] tracking-wide">
						Find high-quality services at every price point. No hourly rates,
						just project-based pricing
					</p>

					<div className="flex items-center gap-2 font-medium">
						<img src="check.png" alt="a checkmark" />
						Quality work done quickly
					</div>
					<p className="text-[grey] tracking-wide">
						Find the right freelancer to begin working on your project within
						minutes.
					</p>

					<div className="flex items-center gap-2 font-medium">
						<img src="check.png" alt="a checkmark" />
						Protected payments, every time
					</div>
					<p className="text-[grey] tracking-wide">
						Always know what you'll pay upfront. Your payment isn't released
						until you approve the work.
					</p>

					<div className="flex items-center gap-2 font-medium">
						<img src="check.png" alt="a checkmark" />
						24/7 support
					</div>
					<p className="text-[grey] tracking-wide">
						Find high-quality services at every price point. No hourly rates,
						just project-based pricing.
					</p>
				</div>

				<div>
					<video src="" controls className="w-[720px] "></video>
				</div>
			</div>
		</div>
	);
};

export default FeatureTwo;
