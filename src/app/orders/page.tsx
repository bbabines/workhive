import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Orders() {
	const currentUser = {
		id: 1,
		username: "Anna",
		isSeller: true,
	};

	return (
		<>
			<Navbar />

			<div className="flex justify-center text-[#555] my-4 mx-4">
				<div className="max-w-[1440px] w-[100%]">
					<div className="flex justify-between">
						<h1 className="text-[1.75rem] font-bold">Orders</h1>
					</div>

					<table className="w-[100%]">
						<thead>
							<tr className="h-[50px]">
								<th className="text-left">Image</th>
								<th className="text-left">Title</th>
								<th className="text-left">Price</th>
								<th className="text-left">
									{currentUser.isSeller ? "Buyer" : "Seller"}
								</th>
								<th className="text-left">Contact</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-[#1dbf730f] h-[50px]">
								<td>
									<img
										className="w-[50px] h-[25px] object-cover"
										src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
										alt=""
									/>
								</td>
								<td>Stunning concept art</td>
								<td>
									59.<sup className="text-[12px]">99</sup>
								</td>
								<td>13</td>
								<td>
									<img
										className="w-[20px] cursor-pointer"
										src="/message.png"
										alt=""
									/>
								</td>
							</tr>
							<tr className="h-[50px]">
								<td>
									<img
										className="w-[50px] h-[25px] object-cover"
										src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
										alt=""
									/>
								</td>
								<td>Ai generated concept art</td>
								<td>
									120.<sup className="text-[12px]">99</sup>
								</td>
								<td>41</td>
								<td>
									<img
										className="w-[20px] cursor-pointer"
										src="/message.png"
										alt=""
									/>
								</td>
							</tr>
							<tr className="bg-[#1dbf730f] h-[50px]">
								<td>
									<img
										className="w-[50px] h-[25px] object-cover"
										src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
										alt=""
									/>
								</td>
								<td>High quality digital character</td>
								<td>
									79.<sup className="text-[12px]">99</sup>
								</td>
								<td>55</td>
								<td>
									<img
										className="w-[20px] cursor-pointer"
										src="/message.png"
										alt=""
									/>
								</td>
							</tr>
							<tr className="h-[50px]">
								<td>
									<img
										className="w-[50px] h-[25px] object-cover"
										src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
										alt=""
									/>
								</td>
								<td>Illustration hyper realistic painting</td>
								<td>
									119.<sup className="text-[12px]">99</sup>
								</td>
								<td>29</td>
								<td>
									<img
										className="w-[20px] cursor-pointer"
										src="/message.png"
										alt=""
									/>
								</td>
							</tr>
							<tr className="bg-[#1dbf730f] h-[50px]">
								<td>
									<img
										className="w-[50px] h-[25px] object-cover"
										src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
										alt=""
									/>
								</td>
								<td>Original ai generated digital art</td>
								<td>
									59.<sup className="text-[12px]">99</sup>
								</td>
								<td>34</td>
								<td>
									<img
										className="w-[20px] cursor-pointer"
										src="/message.png"
										alt=""
									/>
								</td>
							</tr>
							<tr className="h-[50px]">
								<td>
									<img
										className="w-[50px] h-[25px] object-cover"
										src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
										alt=""
									/>
								</td>
								<td>Text based ai generated art</td>
								<td>
									110.<sup className="text-[12px]">99</sup>
								</td>
								<td>16</td>
								<td>
									<img
										className="w-[20px] cursor-pointer"
										src="/message.png"
										alt=""
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Orders;
