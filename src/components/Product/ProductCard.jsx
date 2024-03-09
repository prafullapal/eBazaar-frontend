import { LucideShoppingCart } from "lucide-react";
import { useState } from "react";

function ProductCard({ product }) {
	const [quantity, setQuantity] = useState(0);
	return (
		<div className="flex flex-col border border-mantis-500 w-fit mx-auto p-2 rounded-md mt-2 bg-mantis-100">
			<img
				className="h-36 w-36"
				src={
					product?.image ||
					"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
				}
			/>
			<div className="flex pl-1 justify-between">
				<div className="flex-col">
					<h1 className="text-sm font-semibold">
						{product?.name || "Denim Bag"}
					</h1>
					<p className="text-xs font-extralight">
						{product?.category || "Bag"}
					</p>
					<h2 className="text-mantis-800 font-bold">
						{product?.price || "100"}
					</h2>
				</div>
				<div className="flex flex-col">
					{quantity === 0 ? (
						<div className="flex bg-mantis-500 rounded-md text-white mt-2 items-center gap-2 p-2 font-semibold">
							<button
								className="bg-mantis-500"
								onClick={() => setQuantity((quantity) => quantity + 1)}
							>
								<LucideShoppingCart size={12} />
							</button>
						</div>
					) : (
						<div className="flex bg-mantis-500 rounded-md text-white mt-2 items-center gap-2 px-1 font-semibold">
							<button onClick={() => setQuantity((quantity) => quantity - 1)}>
								-
							</button>
							<p className="text-xs">{quantity}</p>
							<button onClick={() => setQuantity((quantity) => quantity + 1)}>
								+
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
