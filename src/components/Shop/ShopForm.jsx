/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, TextArea, Button } from "../";
import { useAxios } from "../../hooks/useAxios";

const validationSchema = yup.object({
	name: yup.string().required("Name is required"),
	description: yup.string().required("Description is required"),
});

function ShopForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(validationSchema) });

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
		mutateAsync: shopApi,
		status,
	} = useAxios();

	const handleShopCreation = async (payload) => {
		console.log(data);
		await shopApi({ method: "post", url: "/shops/", data: payload });
	};

	console.log(errors);
	return (
		<form
			className="max-w-4xl container mx-auto"
			onSubmit={handleSubmit(handleShopCreation)}
		>
			<div className="grid grid-cols-2">
				<div className="space-y-2 mt-2">
					<Input
						placeholder="Name"
						className="!border !rounded-md"
						{...register("name")}
						validation={errors.name?.message}
					/>
					<TextArea
						placeholder="Description"
						className="!border !rounded-md"
						{...register("description")}
					/>
				</div>
			</div>
			<Button className="my-2" type="submit">
				Create Shop
			</Button>
		</form>
	);
}

export default ShopForm;
