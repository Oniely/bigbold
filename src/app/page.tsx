import ProductCard from "@/components/ProductCard";
import { Mouse } from "lucide-react";
import Image from "next/image";

const Home = () => {
	return (
		<>
			<section className="w-full h-dvh bg-bg relative">
				<Image
					src="/images/bg.jpg"
					alt="Background Image"
					className="object-cover object-bottom z-10"
					fill
				/>

				<h1 className="text-[9rem] font-mono font-bold z-20 absolute bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col gap-2">
					<span className="mr-50 leading-none">Bigger</span>
					<span className="ml-50 leading-none text-nowrap">
						& Bolder
					</span>
				</h1>
				<a href="#new-arrivals">
					<Mouse
						size={30}
						className="absolute bottom-15 left-1/2 transform -translate-x-1/2 z-20 animate-bounce delay-1000"
					/>
				</a>
			</section>
			<section className="padding-container" id="new-arrivals">
				<div className="flex flex-col items-center justify-center h-[240px] space-y-2">
					<h1 className="text-5xl font-bold font-mono">
						New Arrivals
					</h1>
					<p className="font-medium text-sm">
						Your one-stop shop for the latest fashion trends and
						timeless styles.
					</p>
				</div>
			</section>

			<section className="padding-container space-y-10 pb-12">
				<h1 className="text-2xl font-mono font-medium">
					Hoodies & Jackets
				</h1>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between justify-items-center gap-y-12 gap-x-4">
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
						isNewArrival
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
						isNewArrival
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
						isNewArrival
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
						isNewArrival
					/>
				</div>
			</section>
		</>
	);
};

export default Home;
