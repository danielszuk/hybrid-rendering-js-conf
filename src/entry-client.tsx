import ReactDOM from "react-dom/client";
import { App } from "./app";

// Render the app on the client side
const rootNode = document.getElementById("root");
if (!rootNode) throw new Error("Root node not found.");

const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
