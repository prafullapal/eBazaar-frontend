// eslint-disable-next-line react/prop-types
function Button({ outline = false, children, className = "", ...props }) {
	return (
		<button
			className={`${className} rounded-md p-2 ${
				!outline
					? "bg-mantis-500  text-white  hover:bg-mantis-600 active:bg-mantis-700"
					: "bg-white text-mantis-500 border border-mantis-500  hover:border-mantis-600 hover:text-mantis-600 active:border-mantis-700 active:text-mantis-700"
			}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
