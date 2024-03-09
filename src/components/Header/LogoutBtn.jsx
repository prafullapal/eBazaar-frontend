import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/authSlice";

function LogoutBtn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
		mutateAsync: logoutApi,
		status,
	} = useAxios();

	const handleLogout = async () => {
		await logoutApi({ method: "get", url: "/users/logout", data: [] });
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(logout());
			navigate("/");
		} else return;
	}, [isSuccess]);
	return (
		<button
			onClick={handleLogout}
			className="rounded-md bg-white p-1 px-3 text-[#4c8435] hover:bg-[#4c8435] hover:text-white"
		>
			Logout
		</button>
	);
}

export default LogoutBtn;
