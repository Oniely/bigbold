import ProductCard from "@/components/ProductCard";

const Home = () => {
	return (
		<div>
			<section className="padding-container">
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
				<div className="grid grid-cols-4 justify-between justify-items-center gap-y-12">
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
					<ProductCard
						name="Jacket Gonggong"
						price={145}
						colors={["#91c09b", "#b6c6b7"]}
					/>
				</div>
			</section>
		</div>
	);
};

export default Home;
