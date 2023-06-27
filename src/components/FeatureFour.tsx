import React from "react";

const FeatureFour = () => {
	return (
		<div className="bg-[#0d084d] text-[white] px-[50px] ">
			<div className="flex  text-lg ">
				<div className="w-[30%] flex flex-col  mx-auto my-auto">
					<h3 className="text-[2.5rem] pb-[30px] pt-[0px] ">
						workhive <i>business</i>
					</h3>
					<h4 className="text-[2rem] mb-[30px] ">
						A business solution designed for <i>teams</i>
					</h4>
					<p className="mb-[30px] text-[1.25rem] text-[lightgrey]">
						Upgrade to a curated experience packed with tools and benefits,
						dedicated to businesses
					</p>
					<div className="font-normal text-sm">
						<img src="check.png" alt="a checkmark" />
						Connect to freelancers with proven business experience
					</div>
					<div className="font-normal text-sm">
						<img src="check.png" alt="a checkmark" />
						Get matched with the perfect talent by a customer success manager
					</div>
					<div className="font-normal text-sm">
						<img src="check.png" alt="a checkmark" />
						Manage teamwork and boost productivity with one powerful workspace
					</div>
					<button className="bg-[#1dbf73] py-[10px] px-[20px] rounded-md cursor-pointer mb-[20px] mt-[20px]">
						Explore Liverr Business
					</button>
				</div>
				<div className="font-normal text-sm">
					<img
						src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
						alt="a cascading of pictures"
						className="py-[100px] w-[50%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default FeatureFour;