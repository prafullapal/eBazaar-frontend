import { useState } from "react";
import { AddProduct, EditProduct } from "../";
import AddShop from "../Shop/AddShop";

function Dashboard() {
	const [active, setActive] = useState(0);
	const navItems = [
		{
			name: "Products",
			element: <AddProduct />,
		},
		{
			name: "Shops",
			element: <AddShop />,
		},
		{
			name: "Sales",
			element: <EditProduct />,
		},
	];
	return (
		<div className="container mx-auto grid grid-cols-4">
			{/* Sidebar */}
			<div className="col-span-1 p-4 border border-mantis-200 m-2 rounded-md">
				<ul className="flex flex-col gap-2">
					{navItems.map((item, index) => (
						<button key={index} onClick={() => setActive(index)}>
							<li
								className={`rounded-md p-2 text-left ${
									active === index
										? "text-white bg-mantis-500 hover:bg-mantis-600"
										: " text-black hover:bg-gray-300"
								} cursor-pointer`}
							>
								{item.name}
							</li>
						</button>
					))}
				</ul>
			</div>
			<div className="col-span-3 border border-mantis-200 m-2 rounded-md">
				{navItems[active].element}
			</div>
		</div>
	);
}

export default Dashboard;
