import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
