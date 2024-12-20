import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodoProvider } from "./components/TodoContext.jsx"; // Import the provider

createRoot(document.getElementById("root")).render(
    <TodoProvider>
        <App />
    </TodoProvider>
);
