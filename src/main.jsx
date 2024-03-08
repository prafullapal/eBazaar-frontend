import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import store from "./store/store.js";

import App from "./App.jsx";
import { AuthLayout } from "./components";
import { Home, LogIn, SignUp, Settings, Dashboard } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/login",
				element: (
					<AuthLayout protection={false}>
						<LogIn />
					</AuthLayout>
				),
			},
			{
				path: "/signup",
				element: (
					<AuthLayout protection={false}>
						<SignUp />
					</AuthLayout>
				),
			},
			{
				path: "/seller/dashboard",
				element: (
					<AuthLayout protection={true}>
						<Dashboard />
					</AuthLayout>
				),
			},
			{
				path: "/settings",
				element: (
					<AuthLayout protection={true}>
						<Settings />
					</AuthLayout>
				),
			},
		],
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
);
