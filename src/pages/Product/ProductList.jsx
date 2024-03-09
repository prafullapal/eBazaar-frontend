import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/features/productSlice";
import { ProductCard } from "../../components";

function ProductList() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
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
			await api({ method: "get", url: "/products", data: [] }).then((data) => {
				dispatch(addProduct({ products: data?.data?.data }));
			});
		})();
	}, []);

	return (
		<div className="flex flex-row flex-wrap container mx-auto gap-4">
			{products.map((product) => (
				<ProductCard product={product} key={product._id} />
			))}
		</div>
	);
}

export default ProductList;
