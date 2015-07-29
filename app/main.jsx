import React from "react";
import App from "./components/App";

if (typeof window !== "undefined") {
    window.onload = function () {
        React.render(<App/>, document.getElementById("appContainer"));
    };
}
