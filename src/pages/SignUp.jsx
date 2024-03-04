import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "../components";

const validationSchema = yup.object({
	name: yup
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

	const signUpHandler = (data) => {
		console.log(data);
	};

	return (
		<div id="login-form" className="mx-auto max-w-md p-8">
			<h2 className="mb-4 text-2xl font-semibold">Welcome Back!</h2>
			<form
				onSubmit={handleSubmit(signUpHandler)}
				className="flex flex-col gap-4"
			>
				<Input
					type="text"
					label="Full Name"
					placeholder="Full Name"
					{...register("name", { required: true })}
					validation={errors.name?.message}
					className="rounded-md"
				/>
				<Input
					type="email"
					label="Email"
					placeholder="Email"
					{...register("email", { required: true })}
					validation={errors.email?.message}
					className="rounded-md"
				/>
				<Input
					type="password"
					label="Password"
					placeholder="Password"
					{...register("password", { required: true })}
					validation={errors.password?.message}
					onPasswordVisibilityChange={togglePasswordVisibility}
					className="rounded-md"
				/>
				<Button outline type="submit">
					SignUp
				</Button>
			</form>
		</div>
	);
}

export default SignUp;
