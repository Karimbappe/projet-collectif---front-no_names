import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./signIn";
import SignUp from "./signUp";
import { HashRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Category from "./Category";
import Admin from "./Admin";
import Result from "./Result";
import AboutUs from "./AboutUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ce render sert a afficher dans une seule page page html (index.html) toute les pages qui sont situe dans le dossier "src"
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        {/* rajouter autant de "Route path" en les assignants a leurs fichier dans le dossier "src" */}
        <Route path="/Product/:_id" element={<Product />} />
        <Route path="/Category/:category" element={<Category />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Result/:query" element={<Result />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
