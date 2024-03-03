function SignIn() {
	return (
		<div id="login-form" className="mx-auto max-w-md p-8">
			<h2 className="mb-4 text-2xl font-semibold">Welcome Back!</h2>
			<form className="flex flex-col gap-4">
				<input
					type="text"
					className="rounded-full border-2 border-[#4c8435] p-2 outline-none"
					placeholder="Username"
				/>
				<input
					type="password"
					className="rounded-full border-2 border-[#4c8435] p-2 outline-none"
					placeholder="Password"
				/>
				<button className="rounded-full bg-[#4c8435] p-2 px-4 text-white transition duration-300 ease-in-out hover:bg-[#3e6f2a]">
					Sign In
				</button>
			</form>
		</div>
	);
}

export default SignIn;
