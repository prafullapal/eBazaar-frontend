import React, { useId } from "react";

function TextArea(
	{ label, className = "", placeholder, rows = 4, ...props },
	ref
) {
	const id = useId();
	return (
		<div>
			{label && <label htmlFor={id}>{label}</label>}
			<textarea
				rows={rows}
				placeholder={placeholder}
				className={`bg-mantis-100 w-full rounded-md border border-mantis-500 p-2 ${className}`}
				{...props}
				ref={ref}
				id={id}
			/>
		</div>
	);
}

export default React.forwardRef(TextArea);
