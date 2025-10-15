import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sample from "./components/Sample";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/sample",
		element: <Sample />,
	},
]);
export default router;
