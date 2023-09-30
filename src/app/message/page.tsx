import Navbar from "@/components/Navbar";
import Link from "next/link";

const Message = () => {
	return (
		<>
			<Navbar />
			<div className="mt-8 flex justify-center">
				<div className="max-w-[1200px] w-[100%]">
					<span className="font-light text-[1.25rem] text-[#555]">
						<Link href="/messages">Messages</Link> &gt; John Doe &gt;
					</span>

					{/* Chat Box */}
					<div className="h-[800px] mx-0 my-[30px] flex flex-col gap-5  overflow-scroll">
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey]rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur! HEJHE
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="flex flex-row-reverse self-end max-w-[600px] text-[18px] gap-5">
							<img
								src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[royalblue] text-[white] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
						<div className="max-w-[600px] text-[18px] flex gap-5">
							<img
								src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-[40px] h-[40px] rounded-[50%] object-cover"
							/>
							<p className="max-w-[500px] bg-[#F4F1F1] text-[grey] rounded-t-[20px] rounded-b-[20px] rounded-l-[20px] p-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								iure mollitia perspiciatis officiis voluptate? Sequi quae
								officia possimus, iusto labore alias mollitia eveniet nemo
								placeat laboriosam nisi animi! Error, tenetur!
							</p>
						</div>
					</div>

					<hr className="h-0 mb-[20px] border border-[#E8E6E6]" />

					{/* Message Area */}
					<div className="flex items-center justify-between mx-4">
						<textarea
							placeholder="Write a message"
							className="w-[80%] h-[100px] border border-[lightgrey] rounded-[10px] pl-4 pt-2"
						/>
						<button className="w-[100px] bg-[#1dbf73] p-[29px] text-white font-medium border-none rounded-[10px] cursor-pointer">
							Send
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Message;
