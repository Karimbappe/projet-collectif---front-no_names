import React from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
} from "mdb-react-ui-kit";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUsForm() {
	return (
		<>
			<Navbar />
			<MDBContainer fluid>
				<MDBCard className="text-black m-5" style={{borderRadius: "25px"}}>
					<MDBCardBody>
						<MDBRow>
							<MDBCol
								md="10"
								lg="6"
								className="order-2 order-lg-1 d-flex flex-column align-items-center"
							>
								<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
									A propos de nous..
								</p>
								<p className="text-justify h fw mb-5 mx-1 mx-md-4 mt-4 about">
									Un puissant seigneur extrêmement riche et un pauvre paysan
									avaient chacun un fils. Le puissant seigneur monta avec son
									fils en haut d’une montagne, lui montra avec fierté le paysage
									en contrebas et lui dit avec engouement : – Regarde, mon fils
									! Un jour, tout cela sera à toi, le jour de ta succession !{" "}
									<br></br> Le fils ressentit alors une grande exaltation, une
									ivresse de puissance, un bonheur intense. Mais tandis qu’il
									redescendait doucement de la montagne, sa joie fut perturbée
									par des pensées de peurs, de craintes : et si son père demain
									changeait d’avis ? et si des intrigants prenaient le pouvoir ?
									et s’il disparaissait le lendemain sans qu’il ait eu le temps
									de lui transmettre la charge ? et si… ? <br></br> Le paysan
									pauvre monta avec son fils sur l’autre versant de la même
									montagne, au même moment; il lui montra le même paysage et lui
									dit avec amour : – Regarde, mon fils ! Regarde ! Le fils resta
									là, attentif aux sons, aux odeurs, aux couleurs, aux images,
									et s’imprégna de la majesté du monde, le cœur emplit de joie…
								</p>
							</MDBCol>

							<MDBCol
								md="10"
								lg="6"
								className="order-1 order-lg-2 d-flex align-items-center"
							>
								<MDBCardImage
									className="AboutUsChair"
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
									fluid
								/>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
			<Footer />
		</>
	);
}

export default AboutUsForm;
