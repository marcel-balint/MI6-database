import React from "react";
import { createRoot } from "react-dom/client";
import Mi6 from "./Mi6";

export default function ReactAppName() {
    return <Mi6 />;
}

const container = document.getElementById("people-of-interest-app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ReactAppName />);
