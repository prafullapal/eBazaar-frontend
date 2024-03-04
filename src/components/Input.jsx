/* eslint-disable react/prop-types */
import React, { useId, useState } from "react";
import { LucideEye, LucideEyeOff } from "lucide-react";

const Input = React.forwardRef(function Input(
	{
		label,
		placeholder,
		type = "text",
		className = "",
		validation,
		onPasswordVisibilityChange,
		...props
	},
	ref
) {
	const id = useId();
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
		onPasswordVisibilityChange && onPasswordVisibilityChange(!showPassword);
	};

	return (
		<div className="w-full">
			{label && (
				<label className="px-1 text-mantis-800" htmlFor={id}>
					{label}
				</label>
			)}
			<div className="relative">
				<input
					type={showPassword ? "text" : type}
					ref={ref}
					id={id}
					className={`w-full bg-mantis-100 border-2 border-mantis-500 hover:border-mantis-700 focus:border-mantis-800 p-2 outline-none ${className}`}
					placeholder={placeholder}
					{...props}
				/>
				{type === "password" && (
					<button
						className="absolute bottom-3 right-3"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? (
							<LucideEyeOff color="#61a146" />
						) : (
							<LucideEye color="#61a146" />
						)}
					</button>
				)}
			</div>
			{validation && <p className="text-red-500 text-sm px-1">{validation}</p>}
		</div>
	);
});

export default Input;
