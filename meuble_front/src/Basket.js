import React, {useState} from "react";

function Basket() {
	const [nbProducts, setnbProducts] = useState(1);
	const updateNbProduct = (e) => {
		setnbProducts(Number(e.target.value));
	};

	return (
		<div>
			<form>
				<label htmlFor="quantity">Quantité</label>
				<input
					type="number"
					id="quantity"
					value={nbProducts}
					onChange={updateNbProduct}
				></input>
				<button>Ajouter au panier</button>
				<span className="adding-info"></span>
			</form>
		</div>
	);
}

export default Basket;
