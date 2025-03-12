import Image from "next/image";

interface Props {
	img?: string;
	name: string;
	price: number;
	colors: string[];
	isNewArrival?: boolean;
}

const ProductCard = ({
	img,
	name,
	price,
	colors,
	isNewArrival = false,
}: Props) => {
	return (
		<div className="flex flex-col w-[250px] relative">
			<div className="w-full h-[280px] flex flex-col relative">
				<Image
					src={img || "/images/product/jacket.jpg"}
					alt="Jacket"
					className="object-cover"
					fill
				/>
			</div>
			<div className="flex flex-col py-3 px-2 text-black font-mono w-full">
				<p className="text-sm">{name}</p>
				<p className="text-sm">${price} USD</p>
				<div className="mt-1 flex items-center gap-[6px]">
					{colors.map((color, idx) => (
						<a href="#" key={idx}>
							<div
								className="w-[12px] h-[12px]"
								style={{ backgroundColor: color }}
							/>
						</a>
					))}
				</div>
			</div>
			{isNewArrival && (
				<span className="absolute top-3 -left-2 font-mono text-[12px] font-medium bg-text text-bg px-3">
					New
				</span>
			)}
		</div>
	);
};

export default ProductCard;
