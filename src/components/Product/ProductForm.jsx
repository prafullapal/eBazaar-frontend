/* eslint-disable no-unused-vars */
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MultiSelect, Select, Input, TextArea, Button } from "../";
import { useAxios } from "../../hooks/useAxios";
import { useEffect, useId, useState } from "react";

const validationSchema = yup.object({
	name: yup.string().required("Name is required"),
	price: yup.number().required("Price is required"),
	stock: yup.number().required("Stock is required"),
	description: yup.string().required("Description is required"),
});

function ProductForm() {
	const id = useId();
	const [shopList, setShopList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);
	const [image, setImage] = useState(null);
	const {
		register,
		handleSubmit,
		resetField,
		control,
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
		mutateAsync: api,
		status,
	} = useAxios();

	useEffect(() => {
		(async () => {
			await api({ method: "get", url: "/shops/", data: [] }).then((data) =>
				setShopList(data?.data?.data)
			);
			await api({ method: "get", url: "/categories", data: [] }).then((data) =>
				setCategoryList(data?.data?.data)
			);
		})();
	}, []);

	const handleProductUpload = async (payload) => {
		console.log(payload);
		await api({
			method: "post",
			url: "/products/",
			data: payload,
			headers: { "Content-Type": "multipart/form-data" },
		});
	};

	return (
		<form
			className="max-w-4xl container mx-auto"
			onSubmit={handleSubmit(handleProductUpload)}
		>
			<div className="grid grid-cols-2">
				<div className="space-y-2 mt-2">
					<Input
						placeholder="Name"
						className="!border !rounded-md"
						{...register("name")}
						validation={errors.name?.message}
					/>
					<Input
						placeholder="Price"
						type="Number"
						className="!border !rounded-md"
						{...register("price")}
						validation={errors.price?.message}
					/>
					<Input
						placeholder="Stock"
						type="Number"
						className="!border !rounded-md"
						{...register("stock")}
						validation={errors.stock?.message}
					/>
					<Controller
						control={control}
						name="category"
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<MultiSelect
								options={categoryList}
								name="category"
								{...register("category")}
								onChange={onChange}
								ref={ref}
							/>
						)}
					/>

					<Select name="Shop" {...register("shop")}>
						{shopList.map((item, index) => (
							<option key={index} value={item._id}>
								{item.name}
							</option>
						))}
					</Select>
				</div>
				<div>
					<div className="m-2 flex p-2 rounded-md h-48 justify-center">
						{image ? (
							<div className="relative my-auto">
								<img
									src={image}
									className="object-fit rounded-md h-36 my-auto"
								/>
								<button
									onClick={() => {
										resetField("image");
										setImage(null);
									}}
									className="bg-red-500 my-auto rounded-full text-xs px-2 py-1 text-white absolute -top-2 -right-2"
								>
									X
								</button>
							</div>
						) : (
							<label
								htmlFor={id}
								className="rounded-md border border-red-400 cursor-pointer text-gray-400 my-auto"
							>
								Select Image
							</label>
						)}
					</div>
					<input
						id={id}
						type="file"
						name="image"
						className="hidden"
						{...register("image", {
							onChange: (e) => {
								setImage(URL.createObjectURL(e.target.files[0]));
							},
						})}
					/>
				</div>
			</div>
			<div className="space-y-2 mt-2">
				<TextArea
					placeholder="Description"
					className="!border !rounded-md"
					{...register("description")}
				/>
			</div>
			<Button className="my-2" type="submit">
				Add Product
			</Button>
		</form>
	);
}

export default ProductForm;
