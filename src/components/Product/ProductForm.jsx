import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Select, Input, TextArea, Button } from "../";

const validationSchema = yup.object({
	name: yup.string().required("Name is required"),
	price: yup.number().required("Price is required"),
	stock: yup.number().required("Stock is required"),
	description: yup.string().required("Description is required"),
});

function ProductForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(validationSchema) });

	const handleProductUpload = (data) => {
		console.log(data);
	};

	console.log(errors);
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
					<Select name="Shop" {...register("shop")}>
						<option value={"frgfreg"}>admdne</option>
					</Select>
				</div>
			</div>
			<div className="space-y-2 mt-2">
				<Select name="Categories" {...register("category")}>
					<option value={"option1"}>option1</option>
				</Select>
				<TextArea
					placeholder="Description"
					className="!border !rounded-md"
					{...register("description")}
				/>
			</div>
			<Button className="mt-2" type="submit">
				Add Product
			</Button>
		</form>
	);
}

export default ProductForm;
