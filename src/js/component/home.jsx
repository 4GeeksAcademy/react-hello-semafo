import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [colors, setColors] = useState(["red", "yellow", "green"]);

	const cycleColors = () => {
		const currentIndex = colors.indexOf(selectedColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		setSelectedColor(colors[nextIndex]);
	};

	const addPurple = () => {
		if (!colors.includes("purple")) {
			setColors([...colors, "purple"]);
		}
	};

	return (
		<div className="traffic-light-container">
			<div className="traffic-light">
				{colors.map((color) => (
					<div
						key={color}
						onClick={() => setSelectedColor(color)}
						className={`light ${color} ${selectedColor === color ? "glow" : ""}`}
					></div>
				))}
			</div>
			<button onClick={cycleColors}>Cambiar color</button>
			<button onClick={addPurple}>Añadir color diferente</button>
		</div>
	);
};

export default Home;
