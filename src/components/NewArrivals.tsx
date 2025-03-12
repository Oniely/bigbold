import ProductCard from "./ProductCard";

const NewArrivals = () => {
	return (
		<>
			<section
				className="max-w-container padding-container"
				id="new-arrivals"
			>
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
			<section className="max-w-container padding-container space-y-10 pb-12">
				<h1 className="text-2xl font-mono font-medium uppercase">
					For Men
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

export default NewArrivals;
