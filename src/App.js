import Header from "./components/Header";
import Body from "./components/Body";
import { Provider, useSelector } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";
import MainComponent from "./components/MainComponent";
import WatchVideo from "./components/WatchVideo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainComponent />,
        },
        { path: "/watch", element: <WatchVideo /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
