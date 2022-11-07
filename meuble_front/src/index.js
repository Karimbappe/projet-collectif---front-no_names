import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./signIn";
import SignUp from "./signUp"
import {HashRouter, Routes, Route} from "react-router-dom";
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ce render sert a afficher dans une seule page page html (index.html) toute les pages qui sont situe dans le dossier "src"
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route index element={<App />} />
        {/* rajouter autant de "Route path" en les assignants a leurs fichier dans le dossier "src" */}
				<Route path="/Product" element={<Product />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} /> 
			</Routes>
		</HashRouter>
	</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
