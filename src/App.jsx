import router from "../src/Routes/Routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  // Set Router Provider !
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
};

export default App;
