function ShopCard({ shop }) {
	return (
		<div className="flex flex-col border border-mantis-500 w-fit mx-auto p-2 rounded-md mt-2 bg-mantis-100">
			<img
				className="h-36 w-36"
				src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
			/>
			<div className="flex pl-1 justify-between">
				<div className="flex-col">
					<h1 className="text-sm font-semibold">{shop?.name || "Denim Bag"}</h1>
					<p className="text-xs font-extralight">
						{shop?.description || "Bag"}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ShopCard;
