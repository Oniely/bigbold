import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between py-2 px-5 bg-[#1e1e1e] rounded-lg text-white">
			<h1 className="text-lg font-medium flex items-center">
				<Image
					src={"/images/logo.png"}
					width={50}
					height={50}
					alt="BigBold"
				/>
				<span className="font-mono font-bold">Inc.</span>
			</h1>
			<nav>
				<ul className="flex items-center space-x-6">
					<li className="font-medium">Home</li>
					<li className="font-medium">About</li>
					<li className="font-medium">Products</li>
					<li className="font-medium">Order</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
