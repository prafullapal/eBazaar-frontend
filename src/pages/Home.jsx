import { useSelector } from "react-redux";
import ProductList from "./Product/ProductList";

function Home() {
	const authStatus = useSelector((state) => state.auth.status);
	const userData = useSelector((state) => state.auth.userData);
	console.log("UserData: ", authStatus, userData);
	return authStatus ? (
		<>
			<div className="">
				{/* poster sliding components */}
				{/* category wise product list atleast 5d */}
			</div>
			<ProductList />
		</>
	) : (
		<div className="container">Please Login to see products.</div>
	);
}

export default Home;
