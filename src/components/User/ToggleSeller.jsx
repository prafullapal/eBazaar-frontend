/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeller } from "../../store/features/authSlice";
import Button from "../Button";
import { useAxios } from "../../hooks/useAxios";

function ToggleSeller() {
	const [isChanged, setIsChanged] = useState(false);
	const { seller } = useSelector((state) => state.auth.userData);
	const [isSeller, setIsSeller] = useState(seller);

	useEffect(() => {
		setIsSeller(seller);
		setIsChanged(false);
	}, [seller]);

	const dispatch = useDispatch();

	const toggleSwitch = () => {
		setIsChanged(!isChanged);
		setIsSeller(!isSeller);
	};

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
		mutateAsync: sellerApi,
		status,
	} = useAxios();

	const handleSwitch = async (e) => {
		e.preventDefault();
		await sellerApi({
			method: "put",
			url: "/users/seller",
			data: { seller: isSeller },
		});
		dispatch(toggleSeller());
	};

	console.log(isSeller);

	return (
		<div className="flex items-center mt-2 mx-auto container border border-gray-300 rounded-md p-2 justify-between">
			<div className="flex-row flex">
				<span className="mr-2">Want to become a seller?</span>
				<label
					className={`switch relative h-6 w-12  rounded-full flex items-center ${
						isSeller ? "flex-row-reverse bg-mantis-500" : "bg-gray-300"
					}`}
				>
					<input
						type="checkbox"
						checked={isSeller}
						onChange={toggleSwitch}
						className="hidden"
					/>
					<div className="rounded-full h-4 w-4 bg-white ml-1 mr-1 cursor-pointer"></div>
				</label>
			</div>

			<Button
				outline
				onClick={handleSwitch}
				disabled={!isChanged}
				className={`${
					!isChanged
						? "!bg-gray-300 !border-gray-300 !text-gray-500 !cursor-not-allowed"
						: "cursor-pointer"
				}`}
			>
				Update
			</Button>
		</div>
	);
}

export default ToggleSeller;
