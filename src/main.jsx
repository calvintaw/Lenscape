import "./styles/styles.css";
import "./styles/loading.css";
import "./styles/slider.css";
import "./styles/error.css";
import "./styles/scrollBtn.css";
import "./styles/preview-page.css";
import "./styles/main.css";
import "./styles/loading.css";
import "./styles/header.css";
import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
