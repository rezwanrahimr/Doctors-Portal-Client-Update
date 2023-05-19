import router from "../src/Routes/Routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  // Set Router Provider !
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
