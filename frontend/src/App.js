import {createBrowserRouter,RouterProvider} from "react-router-dom"
import SignUp from "./component/signup/SignUp"
import SignIn from "./component/signin/SignIn";
import UserProfile from "./component/UserProfile"
import { Navigate } from "react-router";
import { Children } from "react";
import Body from "./Body";

function App() {

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Navigate to="/signup" replace={true} />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
