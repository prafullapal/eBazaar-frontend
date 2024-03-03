function Header() {
	return (
		<div
			id="navbar"
			className="flex items-center justify-between bg-[#4c8435] p-3"
		>
			<div className="text-3xl text-white">eBazaar</div>
			<div className="text-white">
				<ul className="flex items-center space-x-2">
					<li>A</li>
					<li>B</li>
					<li>B</li>
					<li className="rounded-md bg-white p-1 px-3 text-[#4c8435] hover:bg-[#4c8435] hover:text-white">
						Sign Up
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
