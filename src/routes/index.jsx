import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ToDoPage from "../pages/ToDoPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import PostInfoPage from "../pages/PostInfoPage";





const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/todo", element: <ToDoPage /> },
  { path: "/users", element: <UserPage/>},
  { path: "/posts", element: <PostPage/>},
  { path: "/post/:id", element: <PostInfoPage/>}
]);

export default router;
