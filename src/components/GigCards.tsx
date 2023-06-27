import React from "react";
import Link from "next/link";

type GigCardProps = {
	item: any;
};

const GigCards = ({ item }: GigCardProps) => {
	return (
		// <Link href="/">
		<div className="w-[324px] h-[450px] border border-[#d4d2d2] mb-[40px]">
			<img
				src={item.img}
				alt="a project picture"
				className="w-[100%] h-[50%] object-cover"
			/>
			<div className="py-[10px] px-[20px] flex flex-col gap-5">
				<div className="flex items-center gap-2">
					<img
						src={item.pp}
						alt="profile picture"
						className="h-[26px] w-[26px] rounded-2xl object-cover "
					/>
					<span>{item.username}</span>
				</div>
				<p className="text-[#111]">{item.desc}</p>
				<div className="flex items-center gap-1">
					<img
						src="star.png"
						alt="a start icon"
						className="h-[14px] w-[14px]"
					/>
					<span className="text-[#ffc108] font-bold text-sm">{item.star}</span>
				</div>
			</div>
			<hr className="h-[0px] border-black" />
			<div className="py-[10px] px-[20px] flex items-center justify-between">
				<img
					src="heart.png"
					alt="a heart icon"
					className="w-[16px] h-[16px] cursor-pointer object-cover"
				/>
				<div className="text-[#555] text-sm p=[10px]">
					<span className="text-[#555] text-sm">STARTING AT</span>
					<h2 className="text-[#555] text-lg font-normal text-end">
						$ {item.price}
					</h2>
				</div>
			</div>
		</div>
		// </Link>
	);
};

export default GigCards;
