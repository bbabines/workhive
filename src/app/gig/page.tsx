// import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
	return (
		<div className="flex justify-center">
			<div className="max-w-[1400px] w-[100%] py-[30px] px-0 gap-[50px] flex justify-center max-md:flex-wrap">
				{/* Left Side */}
				<div className="flex flex-1 flex-col gap-[20px] mx-4">
					<span className="uppercase text-[#555]">
						Liverr &gt; Graphics & Design &gt;
					</span>
					<h1 className="text-[1.75rem] font-bold">
						I will create ai generated art for you
					</h1>
					<div className="flex items-center gap-[10px]">
						<img
							className="w-[32px] h-[32px]  rounded-[50%] object-cover"
							src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
							alt=""
						/>
						<span className="font-medium">Anna Bell</span>
						<div className="flex items-center gap-[5px]">
							<img src="/star.png" alt="star icons" />
							<img src="/star.png" alt="star icons" />
							<img src="/star.png" alt="star icons" />
							<img src="/star.png" alt="star icons" />
							<img src="/star.png" alt="star icons" />
							<span className="text-[#ffcc108]">5</span>
						</div>
					</div>
					{/* <Slider slidesToShow={1} arrowsScroll={1} className="bg-[#f5f5f5]"> */}
					<img
						src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="a scene"
						className="max-h-[500px] object-contain"
					/>
					<img
						src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="a scene"
						className="max-h-[500px] object-contain"
					/>
					<img
						src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt="a scene"
						className="max-h-[500px] object-contain"
					/>
					{/* </Slider> */}
					<h2 className="text-[1.25rem] font-medium">About This Gig</h2>
					<p className="text-[1.1rem] font-light leading-6">
						I use an AI program to create images based on text prompts. This
						means I can help you to create a vision you have through a textual
						description of your scene without requiring any reference images.
						Some things I've found it often excels at are: Character portraits
						(E.g. a picture to go with your DnD character) Landscapes (E.g.
						wallpapers, illustrations to compliment a story) Logos (E.g. Esports
						team, business, profile picture) You can be as vague or as
						descriptive as you want. Being more vague will allow the AI to be
						more creative which can sometimes result in some amazing images. You
						can also be incredibly precise if you have a clear image of what you
						want in mind. All of the images I create are original and will be
						found nowhere else. If you have any questions you're more than
						welcome to send me a message.
					</p>
					{/* Seller */}
					<div className="mt-[50px] flex flex-col gap-[20px]">
						<h2 className="text-[1.5rem] font-medium">About The Seller</h2>
						<div className="flex items-center gap-[20px]">
							<img
								src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt="profile pic"
								className="w-[100px] h-[100px] object-cover rounded-[50%]"
							/>
							<div className="flex flex-col gap-[10px]">
								<span>Anna Bell</span>
								<div className="flex items-center gap-[10px]">
									<img
										src="/star.png"
										alt="star icon"
										className="h-[14px] w-[14px]"
									/>
									<img
										src="/star.png"
										alt="star icon"
										className="h-[14px] w-[14px]"
									/>
									<img
										src="/star.png"
										alt="star icon"
										className="h-[14px] w-[14px]"
									/>
									<img
										src="/star.png"
										alt="star icon"
										className="h-[14px] w-[14px]"
									/>
									<img
										src="/star.png"
										alt="star icon"
										className="h-[14px] w-[14px]"
									/>
									<span className="font-bold">5</span>
								</div>
								<button className="bg-white rounded-md border border-[grey] p-[10px]">
									Contact Me
								</button>
							</div>
						</div>

						<div className="border border-[grey] rounded-md p-[20px] mt-[20px]">
							<div className="flex justify-between flex-wrap">
								<div className="w-[300px] flex flex-col gap-[10px] mb-[20px]">
									<span className="font-medium">From</span>
									<span className="desc">USA</span>
								</div>
								<div className="w-[300px] flex flex-col gap-[10px] mb-[20px]">
									<span className="font-medium">Member since</span>
									<span className="desc">Aug 2022</span>
								</div>
								<div className="w-[300px] flex flex-col gap-[10px] mb-[20px]">
									<span className="font-medium">Avg. response time</span>
									<span className="desc">4 hours</span>
								</div>
								<div className="w-[300px] flex flex-col gap-[10px] mb-[20px]">
									<span className="font-medium">Last delivery</span>
									<span className="desc">1 day</span>
								</div>
								<div className="w-[300px] flex flex-col gap-[10px] mb-[20px]">
									<span className="font-medium">Languages</span>
									<span className="desc">English</span>
								</div>
							</div>
							<hr className="h-0 border mb-[20px]" />
							<p>
								My name is Anna, I enjoy creating AI generated art in my spare
								time. I have a lot of experience using the AI program and that
								means I know what to prompt the AI with to get a great and
								incredibly detailed result.
							</p>
						</div>
					</div>

					{/* Reviews  */}
					<div className="mt-[50px]">
						<h2 className="text-[1.75rem] font-medium">Reviews</h2>
						{/* Review 1 */}
						<div className="flex flex-col p-2 gap-5 mt-[20px] mb-0">
							<div className="flex items-center">
								<img
									className="h-[50px] w-[50px] rounded-[50%] mr-2"
									src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
								<div className="flex flex-col">
									<span>Garner David</span>
									<div className="flex items-center gap-[10px] text-[grey]">
										<img
											src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
											alt="a flag"
											className="w-[20px]"
										/>
										<span>United States</span>
									</div>
								</div>
							</div>
							<div className="flex gap-[10px] items-center">
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<span>5</span>
							</div>
							<p>
								I just want to say that art_with_ai was the first, and after
								this, the only artist Ill be using on Fiverr. Communication was
								amazing, each and every day he sent me images that I was free to
								request changes to. They listened, understood, and delivered
								above and beyond my expectations. I absolutely recommend this
								gig, and know already that Ill be using it again very very soon
							</p>
							<div className="flex items-center gap-[10px]">
								<span>Helpful?</span>
								<img
									src="/like.png"
									alt=""
									className="w-[20px] cursor-pointer"
								/>
								<span className="mb-2">Yes</span>
								<img
									src="/dislike.png"
									alt=""
									className="w-[20px] cursor-pointer"
								/>
								<span className="mb-2">No</span>
							</div>
						</div>
						<hr className="h-0 border-2 mb-[20px]" />

						{/* Review 2 */}
						<div className="flex flex-col p-2 gap-5 mt-[20px] mb-0">
							<div className="flex items-center">
								<img
									className="h-[50px] w-[50px] rounded-[50%] mr-2"
									src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
								<div className="flex flex-col">
									<span>Sidney Owen</span>
									<div className="flex items-center gap-[10px] text-[grey]">
										<img
											src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
											alt=""
											className="w-[20px]"
										/>
										<span>Germany</span>
									</div>
								</div>
							</div>
							<div className="flex gap-[10px] items-center">
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<span>5</span>
							</div>
							<p>
								The designer took my photo for my book cover to the next level!
								Professionalism and ease of working with designer along with
								punctuality is above industry standards!! Whatever your project
								is, you need this designer!
							</p>
							<div className="flex items-center gap-[10px]">
								<span>Helpful?</span>
								<img
									src="/like.png"
									alt=""
									className="w-[20px] cursor-pointer"
								/>
								<span className="mb-2">Yes</span>
								<img
									src="/dislike.png"
									alt=""
									className="w-[20px] cursor-pointer"
								/>
								<span className="mb-2">No</span>
							</div>
						</div>
						<hr className="h-0 border-2 mb-[20px]" />

						{/* Review 3 */}
						<div className="flex flex-col p-2 gap-5 mt-[20px] mb-0">
							<div className="flex items-center">
								<img
									className="h-[50px] w-[50px] rounded-[50%] mr-2"
									src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
								<div className="flex flex-col">
									<span>Lyle Giles </span>
									<div className="flex items-center gap-[10px] text-[grey]">
										<img
											src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
											alt=""
											className="w-[20px]"
										/>
										<span>United States</span>
									</div>
								</div>
							</div>
							<div className="flex gap-[10px] items-center">
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<img
									src="/star.png"
									alt="star icon"
									className="h-[14px] w-[14px]"
								/>
								<span>5</span>
							</div>
							<p>
								Amazing work! Communication was amazing, each and every day he
								sent me images that I was free to request changes to. They
								listened, understood, and delivered above and beyond my
								expectations. I absolutely recommend this gig, and know already
								that Ill be using it again very very soon
							</p>
							<div className="flex items-center gap-[10px]">
								<span>Helpful?</span>
								<img
									src="/like.png"
									alt=""
									className="w-[20px] cursor-pointer"
								/>
								<span className="mb-2">Yes</span>
								<img
									src="/dislike.png"
									alt=""
									className="w-[20px] cursor-pointer"
								/>
								<span className="mb-2">No</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="min-w-[320px] w-[35%] h-max max-h-[500px] mx-2 p-4 flex flex-col sticky top-[150px] border border-[#636363] rounded-md gap-[20px]">
					<div className="flex items-center justify-between">
						<h3 className="font-bold text-[1.1rem]">1 AI generated image</h3>
						<h2 className="font-normal text-[1.5rem] text-[#434343]">
							$ 59.99
						</h2>
					</div>
					<p className="text-[#636363] mt-[10px] mb-0">
						I will create a unique high quality AI generated image based on a
						description that you give me
					</p>
					<div className="flex items-center justify-between text-[14px]">
						<div className="flex gap-[10px] mt-[20px] mb-0">
							<img src="/clock.png" alt="a clock" className="w-[18px]" />
							<span>2 Days Delivery</span>
						</div>
						<div className="flex gap-[10px] mt-[20px] mb-0">
							<img
								src="/recycle.png"
								alt="a recycle icon"
								className="w-[18px]"
							/>
							<span>3 Revisions</span>
						</div>
					</div>

					{/* Features */}
					<div className="">
						<div className="flex items-center gap-5 font-light text-[grey] mb-[5px]">
							<img
								src="greencheck.png"
								alt="a green check"
								className="w-[14px]"
							/>
							<span>Prompt writing</span>
						</div>
						<div className="flex items-center gap-5 font-light text-[grey] mb-[5px]">
							<img
								src="/greencheck.png"
								alt="a green check"
								className="w-[14px]"
							/>
							<span>Artwork delivery</span>
						</div>
						<div className="flex items-center gap-5 font-light text-[grey] mb-[5px]">
							<img
								src="/greencheck.png"
								alt="a green check"
								className="w-[14px]"
							/>
							<span>Image upscaling</span>
						</div>
						<div className="flex items-center gap-5 font-light text-[grey] mb-[5px]">
							<img
								src="greencheck.png"
								alt="a green check"
								className="w-[14px]"
							/>
							<span>Additional design</span>
						</div>
					</div>
					<button className="bg-[#1dbf73] p-[10px] text-white font-medium border-none cursor-pointer">
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default Gig;
