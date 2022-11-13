import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Admin from "./Admin";
import { HashRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Chaise from "./Chaise";
import Armoire from "./Armoire";
import Canape from "./Canape";
import Lit from "./Lit";
import Lampe from "./Lampe";
import Table from "./Table";
import Result from "./Result";
import AboutUs from "./AboutUs";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import UsersList from "./UsersList";
import Review from "./Reviews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// ce render sert a afficher dans une seule page page html (index.html) toute les pages qui sont situe dans le dossier "src"
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route index element={<App />} />
				{/* rajouter autant de "Route path" en les assignants a leurs fichier dans le dossier "src" */}
				<Route path="/Product/:_id" element={<Product />} />
				<Route path="/Category/Chaise" element={<Chaise />} />
				<Route path="/Category/Table" element={<Table />} />
				<Route path="/Category/Armoire" element={<Armoire />} />
				<Route path="/Category/Lampe" element={<Lampe />} />
				<Route path="/Category/Lit" element={<Lit />} />
				<Route path="/Result/:category" element={<Result />} />
				<Route path="/Category/Canape" element={<Canape />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} /> 
				<Route path="/Admin" element={<Admin />} /> 
				<Route path="/ProductList" element={<ProductList />} /> 
				<Route path="/UserList" element={<UsersList />} /> 
				<Route path="/AddProduct" element={<AddProduct />} /> 
				<Route path="/AboutUs" element={<AboutUs />} /> 
				<Route path="/Review/:_id" element={<Review />} /> 
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
