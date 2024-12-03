import {createBrowserRouter,RouterProvider} from "react-router-dom"
import SignUp from "./component/SignUp"
import SignIn from "./component/SignIn";
import { Children } from "react";
import Body from "./Body";

function App() {

const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<Body/>,
    children:[
  
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
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
