/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, protection = true }) {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);
	const authStatus = useSelector((state) => state.auth.status);

	useEffect(() => {
		if (!authStatus && protection) navigate("/login");
		else if (!protection && authStatus) navigate("/");
		setLoader(false);
	}, [authStatus, navigate, protection]);

	return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
