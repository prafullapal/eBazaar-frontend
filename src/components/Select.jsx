import React, { useId } from "react";

function Select({ name, label, className = "", children, ...props }, ref) {
	const id = useId();
	return (
		<div>
			{label && <label htmlFor={id}>{label}</label>}
			<select
				name={name}
				className={`w-full p-2 bg-mantis-100 rounded-md border border-mantis-500`}
				{...props}
				ref={ref}
				id={id}
			>
				<option disabled selected>
					Select {name}
				</option>
				{children}
			</select>
		</div>
	);
}

export default React.forwardRef(Select);
