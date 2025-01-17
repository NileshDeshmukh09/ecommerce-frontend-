import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import store from "./redux/store/store";
import MemoizedSnackbar from "./sharedComp/Snackbar/Snackbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <MemoizedSnackbar />
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
}

export default App;
