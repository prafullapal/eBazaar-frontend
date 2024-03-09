import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

function Header() {
	const authStatus = useSelector((state) => state.auth.status);
	const seller = useSelector((state) => state.auth.userData?.seller);
	const navigate = useNavigate();
	const navItems = [
		{
			name: "Home",
			path: "/",
			active: true,
		},
		{
			name: "Login",
			path: "/login",
			active: !authStatus,
		},
		{
			name: "Dashboard",
			path: "/seller/dashboard",
			active: seller,
		},
		{
			name: "Settings",
			path: "/settings",
			active: authStatus,
		},
	];
	return (
		<div
			id="navbar"
			className="flex items-center justify-between bg-[#4c8435] p-3"
		>
			<div className="text-3xl text-white">eBazaar</div>
			<div className="text-white">
				<ul className="flex items-center space-x-2">
					{navItems.map(
						(item) =>
							item.active && (
								<li key={item.name}>
									<button onClick={() => navigate(item.path)}>
										{item.name}
									</button>
								</li>
							)
					)}
					{!authStatus && (
						<li className="rounded-md bg-white p-1 px-3 text-[#4c8435] hover:bg-[#4c8435] hover:text-white">
							<button onClick={() => navigate("/signup")}>Signup</button>
						</li>
					)}
					{authStatus && (
						<li>
							<LogoutBtn />
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default Header;
