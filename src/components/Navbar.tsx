"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [active, setActive] = useState(false);

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", isActive);

		return () => {
			window.removeEventListener("scroll", isActive);
		};
	}, []);

	const currentUser = {
		id: 1,
		username: "Brad B",
		isSeller: true,
	};

	const [open, setOpen] = useState(false);

	return (
		<div
			className={`${
				active
					? "flex flex-col items-center bg-[coral] transition ease delay-150 sticky top-0 "
					: "flex flex-col items-center bg-[mediumpurple] transition ease delay-150 "
			}`}
		>
			<div className="w-[1400px] flex justify-between py-[20px] px-[0]">
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
						{!currentUser?.isSeller && <span>Become a Seller</span>}
					</Link>
					{!currentUser && (
						<button className="color-white py-[10px] px-[20px] rounded border-2 border-white cursor bg-transparent hover:bg-[#bcf5a6] hover:border-2 hover:border-[#bcf5a6]">
							Join
						</button>
					)}
					{currentUser && (
						<div
							className="flex items-center relative"
							onClick={() => setOpen(!open)}
						>
							{/* User */}
							<img
								src="/user-icon.jpg"
								alt="profile picture"
								className="w-[32px] h-[32px] rounded-2xl object-cover cursor-pointer"
							/>
							<span className="cursor-pointer pl-[0.5em]">
								{currentUser?.username}
							</span>
							{open && (
								<div className="w-[200px] flex flex-col gap-[7px] absolute top-[50px] right-[0px] text-[grey] bg-[white] border-2 border-[lightgrey] rounded-lg p-[20px] font-medium">
									{/* Options */}
									{currentUser?.isSeller && (
										<>
											<span>Gigs</span>
											<span>Add New Gig</span>
										</>
									)}
									<span>Orders</span>
									<span>Messages</span>
									<span>Logout</span>
								</div>
							)}
						</div>
					)}
				</div>
			</div>

			{active && (
				<>
					<hr className="w-[100%] h-[0px] border-1 border-slate-300" />
					<div className="w-[1400px] py-[10px] px-[0px] flex justify-between font-light text-slate-300">
						<span>Test 1</span>
						<span>Test 2</span>
						<span>Test 2</span>
						<span>Test 2</span>
						<span>Test 2</span>
						<span>Test 2</span>
						<span>Test 2</span>
						<span>Test 2</span>
						<span>Test 2</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
