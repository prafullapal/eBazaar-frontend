function Footer() {
	return (
		<footer className="absolute bottom-0 w-full bg-[#4c8435] py-6 text-center text-white">
			<div className="container mx-auto">
				<p className="text-sm">&copy; 2024 eBazaar. All rights reserved.</p>
				<div className="mt-2 flex justify-center space-x-4">
					<a href="#" className="hover:text-gray-300">
						Terms of Service
					</a>
					<span>|</span>
					<a href="#" className="hover:text-gray-300">
						Privacy Policy
					</a>
					<span>|</span>
					<a href="#" className="hover:text-gray-300">
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
