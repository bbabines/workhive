"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Messages() {
	const [oldMessages, setOldMessages] = useState(true);

	const currentUser = {
		id: 1,
		username: "Anna",
		isSeller: true,
	};

	const message =
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nobis rem asperiores illum ipsa cumque, esse molestiae libero, aperiam, obcaecati quisquam consectetur dolorem reprehenderit eum harum sunt minima recusandae distinctio.";

	const router = useRouter();

	// add messageId as an argument then push /message/${messageId}
	const navigateToMessage = () => {
		router.push("/message");
	};

	return (
		<>
			<Navbar />

			<div className="flex justify-center text-[#555] my-4 mx-4">
				<div className="max-w-[1440px] w-[100%]">
					<div className="flex justify-between">
						<h1 className="text-[1.75rem] font-bold">Messages</h1>
					</div>

					<table className="w-[100%]">
						<thead>
							<tr className="h-[50px]">
								<th className="text-left">Buyer</th>
								<th className="text-left">Lest Message</th>
								<th className="text-left">Date</th>
								<th className="text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-[#1dbf730f] h-[100px]">
								<td className="text-[black] font-bold">John Doe</td>
								<td
									className="cursor-pointer"
									onClick={() => navigateToMessage()}
								>
									{message.substring(0, 100)}
								</td>
								<td className="text-[grey] font-medium">1 day ago</td>
								<td>
									<button className="bg-[#1dbf73] text-white ml-4 font-medium border-none p-[10px] cursor-pointer">
										Mark as Read
									</button>
								</td>
							</tr>

							<tr className=" bg-[#1dbf730f] h-[100px]">
								<td className="text-[black] font-bold">John Doe</td>
								<td
									className="cursor-pointer"
									onClick={() => navigateToMessage()}
								>
									{message.substring(0, 100)}
								</td>
								<td className="text-[grey] font-medium">1 day ago</td>
								<td>
									<button className="bg-[#1dbf73] text-white ml-4 font-medium border-none p-[10px] cursor-pointer">
										Mark as Read
									</button>
								</td>
							</tr>
							<tr className="bg-[#1dbf730f] h-[100px]">
								<td className="text-[black] font-bold">John Doe</td>
								<td
									className="cursor-pointer"
									onClick={() => navigateToMessage()}
								>
									{message.substring(0, 100)}
								</td>
								<td className="text-[grey] font-medium">1 day ago</td>
								<td>
									<button className="bg-[#1dbf73] text-white ml-4 font-medium border-none p-[10px] cursor-pointer">
										Mark as Read
									</button>
								</td>
							</tr>
							<tr className="h-[100px]">
								<td className="text-[black] font-bold">John Doe</td>
								<td
									className="cursor-pointer"
									onClick={() => navigateToMessage()}
								>
									{message.substring(0, 100)}
								</td>
								<td className="text-[grey] font-medium">1 day ago</td>
							</tr>
							<tr className="h-[100px]">
								<td className="text-[black] font-bold">John Doe</td>
								<td
									className="cursor-pointer"
									onClick={() => navigateToMessage()}
								>
									{message.substring(0, 100)}...
								</td>
								<td className="text-[grey] font-medium">1 day ago</td>
							</tr>
							<tr className="h-[100px]">
								<td className="text-[black] font-bold">John Doe</td>
								<td
									className="cursor-pointer"
									onClick={() => navigateToMessage()}
								>
									{message.substring(0, 100)}...
								</td>
								<td className="text-[grey] font-medium">1 day ago</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Messages;
