import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import PrivateRoute from "../provider/PrivateRoute";
import AddTask from "../pages/AddTask";
import BrowseTask from "../pages/BrowseTask";
import MyPostedTask from "../pages/MyPostedTask";
import AuthLayout from "../auth-layout/AuthLayout";
import Signup from "../auth-layout/Signup";
import Login from "../auth-layout/Login";
import TaskDetails from "../components/TaskDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-task',
                element: <PrivateRoute>
                    <AddTask />
                </PrivateRoute>
            },
            {
                path: '/browse-task',
                element: <BrowseTask/>,
            },
            {
                path: '/my-posted-task',
                element: <PrivateRoute>
                    <MyPostedTask />
                </PrivateRoute>
            },
            {
                path: '/task-details/:id',
                element: <PrivateRoute>
                    <TaskDetails />
                </PrivateRoute>
            }
        ]
    },
    {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signup",
        Component: Signup,
      },
      {
        path: "/auth/login",
        Component: Login,
      }
    ],
  },
])