"use client";
import React, { useState } from "react";

import GigCards from "@/components/GigCards";
import { gigs } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gigs = () => {
	const [openSortMenu, setOpenSortMenu] = useState(false);
	const [sort, setSort] = useState("Sales");

	const reSort = (type: any) => {
		setSort(type);
		setOpenSortMenu(false);
	};

	return (
		<>
			<Navbar />

			<div className="flex justify-center">
				<div className="w-[1400px] py-[30px] px-[0px] gap-4 flex flex-col ">
					<span className="font-sm uppercase text-sm text-[#555]  ">
						WORKHIVE &gt; GRAPHICS & DESIGN &gt;
					</span>
					<h3 className="font-bold text-3xl">AI Artists</h3>
					<p className="text-{#555] font-light">
						Explore the boundaries of art and technology with Workhive's AI
						artists
					</p>
					<div className="flex justify-between items-center gap-5 border pt-4">
						{/* Menu */}
						<div className="flex items-center gap-3 text-[#555] font-light">
							{/* LEFT */}
							<span className="text-[#0f101f] font-normal">Budget</span>
							<input
								type="text"
								placeholder="min price"
								className="p-[5px] border border-[black] rounded-md outline-none placeholder:text-[#999]"
							/>
							<input
								type="text"
								placeholder="max price"
								className="p-[5px] border border-[black] rounded-md outline-none placeholder:text-[#999]"
							/>
							<button className="py-[5px] px-[10px] bg-[#1dbf73] text-white border-none font-medium rounded-md cursor-pointer">
								Apply
							</button>
						</div>
						<div className="relative flex items-center gap-2">
							<span className="text-[#555] font-light">Sort By</span>
							{/* <span className="font-normal">Sort type</span> */}

							<span>{sort === "sales" ? "Best Selling" : "Newest"}</span>
							{openSortMenu && (
								<div className="p-[20px] bg-white border border-[lightgrey] rounded absolute top-[40px] right-[0px] z-9 flex flex-col gap-5 text-[#555]">
									{sort === "sales" ? (
										<span
											className="cursor-pointer"
											onClick={() => reSort("createdAt")}
										>
											Newest
										</span>
									) : (
										<span
											className="cursor-pointer"
											onClick={() => reSort("sales")}
										>
											Best Selling
										</span>
									)}
									{/* <span
									className="cursor-pointer"
									onClick={() => reSort("sales")}
								>
									Popular
								</span> */}
								</div>
							)}
							<img
								src="down.png"
								alt="down icon"
								className="w-[15px] cursor-pointer"
								onClick={() => setOpenSortMenu(!openSortMenu)}
							/>
						</div>
					</div>
					<div className="flex flex-wrap justify-between">
						{gigs.map((gig) => (
							<GigCards item={gig} key={gig.id} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Gigs;
