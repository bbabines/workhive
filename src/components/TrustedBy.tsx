import React from "react";

const TrustedBy = () => {
	return (
		<div className="flex content-center justify-center  bg-[white] ">
			{/* <p>TrustedBy</p> */}
			<div className="flex  items-center gap-5 font-bold text-[grey]">
				<span>Trusted By:</span>
				<img
					src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
					alt="Facebook"
				/>
				<img
					src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
					alt="Google"
				/>
				<img
					src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
					alt="Netflix"
				/>
				<img
					src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
					alt="P&G"
				/>
				<img
					src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
					alt="PayPal"
				/>
			</div>
		</div>
	);
};

export default TrustedBy;
// w-[760px]
