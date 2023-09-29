import React from "react";

const Footer = () => {
	return (
		<div className="flex justify-center text-[#7476a7] my-[50px] mx-[0px]">
			<div className="flex flex-col text-center max-lg:w-[80%] max-lg:items-center">
				<div className="w-[1440px] flex justify-between flex-wrap max-xl:w-[1000px] max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-4 max-2xl:w-[900px]">
					<div className="flex flex-col gap-5">
						<h5 className="font-bold text-[#555]">Categories</h5>
						<span className="font-medium">Graphics & Design</span>
						<span className="font-medium">Digital Marketing</span>
						<span className="font-medium">Writing & Translation</span>
						<span className="font-medium">Video & Animation</span>
						<span className="font-medium">Music & Audio</span>
						<span className="font-medium">Programming & Tech</span>
						<span className="font-medium">Data</span>
						<span className="font-medium">Business</span>
						<span className="font-medium">Lifestyle</span>
						<span className="font-medium">Photography</span>
						<span className="font-medium">Sitemap</span>
					</div>

					<div className="flex flex-col gap-5 mt-4">
						<h5 className="font-bold text-[#555]">About</h5>
						<span className="font-medium">Press & News</span>
						<span className="font-medium">Partnerships</span>
						<span className="font-medium">Privacy Policy</span>
						<span className="font-medium">Terms of Service</span>
						<span className="font-medium">Intellectual Property Claims</span>
						<span className="font-medium">Investor Relations</span>
						<span className="font-medium">Contact Sales</span>
					</div>

					<div className="flex flex-col gap-5 mt-4">
						<h5 className="font-bold text-[#555]">Support</h5>
						<span className="font-medium">Help & Support</span>
						<span className="font-medium">Trust & Safety</span>
						<span className="font-medium">Selling on Workhive</span>
						<span className="font-medium">Buying on Workhive</span>
					</div>

					<div className="flex flex-col gap-5 mt-4">
						<h5 className="font-bold text-[#555]">Community</h5>
						<span className="font-medium">Customer Success Stories</span>
						<span className="font-medium">Community hub</span>
						<span className="font-medium">Forum</span>
						<span className="font-medium">Events</span>
						<span className="font-medium">Blog</span>
						<span className="font-medium">Influencers</span>
						<span className="font-medium">Affiliates</span>
						<span className="font-medium"> Podcast</span>
						<span className="font-medium">Invite a Friend</span>
						<span className="font-medium">Become a Seller</span>
						<span className="font-medium">Community Standards</span>
					</div>

					<div className="flex flex-col gap-5 mt-4">
						<h5 className="font-bold text-[#555]">More from Workhive</h5>
						<span className="font-medium">Liverr Business</span>
						<span className="font-medium">Liverr Pro</span>
						<span className="font-medium">Liverr Logo Maker</span>
						<span className="font-medium">Liverr Guides</span>
						<span className="font-medium">Get Inspired</span>
						<span className="font-medium">Liverr Select</span>
						<span className="font-medium">ClearVoice</span>
						<span className="font-medium">Liverr Workspace</span>
						<span className="font-medium">Learn</span>
						<span className="font-medium">Working Not Working</span>
					</div>
				</div>
				{/* Bottom of Footer */}
				<hr className="my-[50px] mx-[0px] border border-[grey] max-lg:w-[100%]" />
				<div className="flex items-center justify-between max-lg:w-[100%] max-lg:flex-col">
					<div className="w-max flex items-center gap-5">
						<h3 className="text-3xl font-bold text-[#555]">workhive</h3>
						<span className="whitespace-nowrap text-[#555]">
							© Workhive International Ltd. 2023
						</span>
					</div>

					{/* Icons */}
					<div className="w-max flex items-center gap-7 max-lg:w-[100%] max-lg:justify-center max-lg:mt-4">
						<div className="flex gap-5">
							<img
								src="twitter.png"
								alt="twitter icon"
								className="w-[24px] h-[24px]"
							/>
							<img
								src="facebook.png"
								alt="facebook icon"
								className="w-[24px] h-[24px]"
							/>
							<img
								src="linkedin.png"
								alt="linkedin icon"
								className="w-[24px] h-[24px]"
							/>
							<img
								src="pinterest.png"
								alt="pintrest icon"
								className="w-[24px] h-[24px]"
							/>
							<img
								src="instagram.png"
								alt="instagram icon"
								className="w-[24px] h-[24px]"
							/>
						</div>
						<div className="flex items-center gap-2">
							<img
								src="language.png"
								alt="a language icon"
								className="w-[24px] h-[24px]"
							/>
							<span className="font-medium text-[#555]">English</span>
						</div>
						<div className="flex items-center gap-2">
							<img
								src="coin.png"
								alt="a coin icon"
								className="w-[24px] h-[24px]"
							/>
							<span className="font-medium text-[#555]">USD</span>
						</div>
						<img
							src="accessibility.png"
							alt="accessability image"
							className="w-[24px] h-[24px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
