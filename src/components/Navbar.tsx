"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [open, setOpen] = useState(false);

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

	return (
		<div
			// Will need to add another condition for pathname !== home so the screen is changed on different pages.
			className={`${
				active
					? "flex flex-col items-center bg-[white] text-grey transition ease delay-150 sticky top-0 z-[999]"
					: "flex flex-col items-center bg-[#013916] transition ease delay-150 z-[999]"
			}`}
		>
			<div className="w-[1400px] flex justify-between py-[20px] px-[0] text-white">
				<div className="text-3xl font-bold">
					<Link href="/">
						<span className={`${active ? "text-[grey]" : "text-white"}`}>
							workhive
						</span>
						<span className="text-[#1dbf73]">.</span>
					</Link>
				</div>

				<div
					// className="flex gap-[24px] items-center font-medium font-mono text-[grey]"
					className={`${
						active
							? "flex gap-[24px] items-center font-medium font-mono text-[grey]"
							: "flex gap-[24px] items-center font-medium font-mono text-[white]"
					}`}
				>
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
						<button className="color-white py-[10px] px-[20px] rounded border-2 border-white cursor bg-transparent hover:bg-[#bcf5a6] hover:border-2 hover:border-[#bcf5a6] ">
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
											<Link href="/">
												<span>Gigs</span>
											</Link>

											<Link href="/">
												<span>Add New Gig</span>
											</Link>
										</>
									)}
									<Link href="/">
										<span>Orders</span>
									</Link>

									<Link href="/">
										<span>Messages</span>
									</Link>

									<Link href="/">
										<span>Logout</span>
									</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>

			{active && (
				<>
					<hr className="w-[100%] h-[0px] border-1 border-slate-600" />
					<div className="w-[1400px] py-[10px] px-[0px] flex justify-between font-light text-slate-600">
						<span>Graphics & Design</span>
						<span>Digital Marketing</span>
						<span>Writing & Translation</span>
						<span>Video & Animation</span>
						<span>Music & Audio</span>
						<span>Programming & Tech</span>
						<span>Photography</span>
						<span>Business</span>
						<span>AI Services</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
