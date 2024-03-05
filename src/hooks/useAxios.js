import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const axiosClient = axios.create({
	baseURL: "/api/v1/",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: true,
});

export const useAxios = () => {
	return useMutation({
		mutationFn: (payload) => {
			return axiosClient({
				method: payload.method,
				data: payload.data,
				url: payload.url,
				headers: payload.headers || {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
		},
	});
};
