"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex flex-col items-center bg-[mediumpurple]">
			<div className="w-[1440px] flex flex-col justify-between py-[20px] px-[0]">
				<div className="text-3xl font-bold">
					<Link href="/">
						<span className="text">workhive</span>
						<span className="text-[#bcf5a6]">.</span>
					</Link>
				</div>

				<div className="flex gap-[24px] items-center font-medium font-mono">
					<Link href="/">
						<span>Workhive Business</span>
					</Link>

					<Link href="/">
						<span>Explore</span>
					</Link>

					<Link href="/">
						<span>English</span>
					</Link>

					<Link href="/">
						<span>Sign In</span>
					</Link>

					<Link href="/">
						<span>Become a Seller</span>
					</Link>
					<button className="color-white py-[10px] px-[20px] rounded border-2 border-white cursor bg-transparent hover:bg-[#bcf5a6] hover:border-2 hover:border-[#bcf5a6]">
						Join
					</button>
				</div>

				<hr className="w-[100%] h-[0px] border-1 border-slate-300" />
				<div className="w-[1440px] py-[10px] px-[0px] flex justify-between font-light text-slate-300">
					<span>Test 1</span>
					<span>Test 2</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
