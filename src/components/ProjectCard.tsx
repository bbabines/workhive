import React from "react";

type ProjectCardProp = {
	item: any;
};

const ProjectCard = ({ item }: ProjectCardProp) => {
	return (
		<div className="w-[300px] h-[300px] rounded-md overflow-hidden cursor-pointer border border-[black]">
			<img
				src={item.img}
				alt="a project picture"
				className="w-[100%] h-[75%] object-cover"
			/>
			<div className="flex items-center gap-5 p-[15px]">
				<img
					src={item.pp}
					alt="a profile picture"
					className="w-[40px] h-[40px] rounded-3xl object-cover"
				/>
				<div className="">
					<h2 className="text-lg font-medium">{item.cat}</h2>
					<span className="font-normal">{item.username}</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
