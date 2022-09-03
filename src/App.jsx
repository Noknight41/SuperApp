import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "assets/animation/Hover.css";
import "assets/animation/Card.css";

import { Auth } from "components";
import store from "redux/store";
import routes from "routes";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={2000} limit={2} />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            if (route.isProtected) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Auth>
                      <route.component />
                    </Auth>
                  }
                />
              );
            }
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
