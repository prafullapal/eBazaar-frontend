/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Spinner } from "../components";
import { useAxios } from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
	fullName: yup
		.string()
		.required("Name is required")
		.min(3, "Name must be atlest 3 characters long"),
	email: yup
		.string()
		.required("Email is required")
		.email("Invalid email")
		.matches(/[.]/g, "Invalid email"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters long")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/[0-9]/, "Password must contain at least one number"),
});

function SignUp() {
	const navigate = useNavigate();
	const [passwordVisible, setPaswordVisible] = useState(false);
	const togglePasswordVisibility = () => {
		setPaswordVisible(!passwordVisible);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

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
		mutateAsync: signupApi,
		status,
	} = useAxios();

	useEffect(() => {
		if (isSuccess) {
			navigate("/login");
		} else return;
	}, [isSuccess, navigate, data]);

	const signUpHandler = async (payload) => {
		await signupApi({ method: "post", url: "/users/register", data: payload });
	};

	return (
		<div id="login-form" className="mx-auto max-w-md p-8">
			<h2 className="mb-4 text-2xl font-semibold">Welcome Back!</h2>
			<form
				onSubmit={handleSubmit(signUpHandler)}
				className="flex flex-col gap-4"
			>
				{isError && (
					<div className="bg-red-300 p-2 border border-red-500 rounded-md">
						<p>{error.message || "Something went wrong!"}</p>
					</div>
				)}
				<Input
					type="text"
					label="Full Name"
					placeholder="Full Name"
					{...register("fullName", { required: true })}
					validation={errors.fullName?.message}
					className="rounded-md"
					disabled={isPending}
				/>
				<Input
					type="email"
					label="Email"
					placeholder="Email"
					{...register("email", { required: true })}
					validation={errors.email?.message}
					className="rounded-md"
					disabled={isPending}
				/>
				<Input
					type="password"
					label="Password"
					placeholder="Password"
					{...register("password", { required: true })}
					validation={errors.password?.message}
					onPasswordVisibilityChange={togglePasswordVisibility}
					className="rounded-md"
					disabled={isPending}
				/>
				<Button outline type="submit" disabled={isPending}>
					{isPending ? <Spinner /> : "SignUp"}
				</Button>
			</form>
		</div>
	);
}

export default SignUp;
