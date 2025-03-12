import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="p-3 bg-transparent fixed top-0 w-full z-50">
			<div className="flex items-center justify-between py-2 px-5 bg-[#1e1e1e] rounded-lg text-white">
				<a href="#">
					<h1 className="text-lg font-medium flex items-center">
						<Image
							src={"/images/logo.png"}
							width={50}
							height={50}
							alt="BigBold"
						/>
						<span className="font-mono font-bold">BigBold.</span>
					</h1>
				</a>
				<nav>
					<ul className="flex items-center space-x-6">
						<li className="font-medium">
							<a href="/">Men</a>
						</li>
						<li className="font-medium">
							<a href="#">Women</a>
						</li>
						<li className="font-medium">
							<a href="#">Collection</a>
						</li>
						<li className="font-medium">
							<a href="#" className="relative">
								<ShoppingBag size={20} />
								<div className="absolute top-0 right-0 bg-red-600 w-[8px] h-[8px] rounded-full" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
