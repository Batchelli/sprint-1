import Navbar from "../../../components/navbar/Navbar";
import styles from "./Hub.module.css";
import Card from "../../../components/cards/cardTri/Card";
import React from 'react'



const Hub = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<section className={styles.trilhas}>
				<Card url={"/trilha"} nome="Trilha UI/UX" lider="Vanessa" time="DS6" cargHora="50" img="src\components\assets\react.png"/>
				<Card url={"/criartrilha"} nome="Trilha UI/UX" lider="Vanessa" time="DS6" cargHora="50" img="src\components\assets\figma.jpg"/>
				<Card />

			</section>
		</div>
	);
};

export default Hub;