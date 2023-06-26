import React from "react";
import Link from "next/link";

type CategoryCardProps = {
	item: any;
};

const CategoryCard = ({ item }: CategoryCardProps) => {
	return (
		<Link href={"/gigs?=design"}>
			<div className="w-[252px] h-[344px] rounded-lg cursor-pointe relative">
				{/* CategoryCard */}
				<img
					src={item.img}
					alt="A category card."
					className="w-[100%] h-[100%] object-cover"
				/>
				<span className="font-medium absolute top-[15px] left-[15px]">
					{item.desc}
				</span>
				<span className="font-[24px] absolute left-[15px] top-[40px]">
					{item.title}
				</span>
			</div>
		</Link>
	);
};

export default CategoryCard;
