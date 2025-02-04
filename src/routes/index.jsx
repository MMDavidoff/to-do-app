import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ToDoPage from "../pages/ToDoPage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/todo", element: <ToDoPage /> },
  { path: "/users", element: <UserPage/>}
]);

export default router;
