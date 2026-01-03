import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { store } from "./stores/Store.jsx";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
