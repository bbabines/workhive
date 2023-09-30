import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Add = () => {
	return (
		<>
			<Navbar />
			<div className="flex justify-center ">
				<div className="max-w-[1400px] w-[100%] py-[50px] px-0 flex flex-col justify-center items-center">
					<h1 className="text-[1.75rem] w-max ml-[12em] mb-[30px] text-[grey] font-medium self-start border max-2xl:ml-0 max-2xl:self-center">
						Add New Gig
					</h1>

					<div className="flex content-between gap-[100px] max-md:flex-wrap max-md:mx-4 max-md:justify-center">
						<div className="flex flex-col justify-between gap-[10px]">
							<label htmlFor="" className="text-[grey] text-[18px]">
								Title
							</label>
							<input
								type="text"
								placeholder="e.g. I will do something I'm really good at"
								className="border border-[grey] p-[20px]"
							/>
							<label htmlFor="" className="text-[grey] text-[18px]">
								Category
							</label>
							<select
								name="cats"
								id="cats"
								className="border border-[grey] p-[20px]"
							>
								<option value="design">Design</option>
								<option value="web">Web Development</option>
								<option value="animation">Animation</option>
								<option value="music">Music</option>
							</select>
							<label htmlFor="" className="text-[grey] text-[18px]">
								Cover Image
							</label>
							<input type="file" className="border border-[grey] p-[20px]" />
							<label htmlFor="" className="text-[grey] text-[18px]">
								Upload Images
							</label>
							<input
								type="file"
								multiple
								className="border border-[grey] p-[20px]"
							/>
							<label htmlFor="" className="text-[grey] text-[18px]">
								Description
							</label>
							<textarea
								name=""
								id=""
								placeholder="Brief descriptions to introduce your service to customers"
								cols={0}
								rows={16}
								className="border border-[grey] p-[20px]"
							></textarea>
							<button className="bg-[#1dbf73] p-[20px] border-none font-light text-white text-[18px] cursor-pointer">
								Create
							</button>
						</div>
						<div className="flex flex-col justify-between gap-[10px]">
							<label htmlFor="" className="text-[grey] text-[18px]">
								Service Title
							</label>
							<input
								type="text"
								placeholder="e.g. One-page web design"
								className="border border-[grey] p-[20px]"
							/>
							<label htmlFor="" className="text-[grey] text-[18px]">
								Short Description
							</label>
							<textarea
								name=""
								id=""
								placeholder="Short description of your service"
								cols={30}
								rows={10}
								className="border border-[grey] p-[20px]"
							></textarea>
							<label htmlFor="" className="text-[grey] text-[18px]">
								Delivery Time (e.g. 3 days)
							</label>
							<input type="number" className="border border-[grey] p-[20px]" />
							<label htmlFor="" className="text-[grey] text-[18px]">
								Revision Number
							</label>
							<input type="number" className="border border-[grey] p-[20px]" />
							<label htmlFor="" className="text-[grey] text-[18px]">
								Add Features
							</label>
							<input
								type="text"
								placeholder="e.g. page design"
								className="border border-[grey] p-[20px]"
							/>
							<input
								type="text"
								placeholder="e.g. file uploading"
								className="border border-[grey] p-[20px]"
							/>
							<input
								type="text"
								placeholder="e.g. setting up a domain"
								className="border border-[grey] p-[20px]"
							/>
							<input
								type="text"
								placeholder="e.g. hosting"
								className="border border-[grey] p-[20px]"
							/>
							<label htmlFor="" className="text-[grey] text-[18px]">
								Price
							</label>
							<input type="number" className="border border-[grey] p-[20px]" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Add;
