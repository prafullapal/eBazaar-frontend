import { Outlet, useNavigate } from "react-router-dom";
import { Header, Footer } from "./components";
import { useEffect, useState } from "react";
import { useAxios } from "./hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/features/authSlice";

export default function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const {
		data,
		error,
		isError,
		isIdle,
		isPending,
		isPaused,
		isSuccess,
		failureCount,
		failureReason,
		mutateAsync: getUserApi,
		status,
	} = useAxios();

	useEffect(() => {
		if (!authStatus) {
			(async () => {
				await getUserApi({ method: "get", url: "/users/current", data: [] })
					.then((res) => {
						dispatch(login({ userData: res?.data?.data }));
					})
					.catch((error) => {
						console.log(error);
						navigate("/login");
					})
					.finally(() => setLoading(false));
			})();
		}
	}, []);
	return (
		<>
			<Header />
			<main>{loading ? <div>Loading...</div> : <Outlet />}</main>
			<Footer />
		</>
	);
}
