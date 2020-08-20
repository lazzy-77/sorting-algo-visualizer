import React, { useState, useEffect } from 'react';
import './SortingAlgoVisualizer.css';

const SortingAlgoVisualizer = (props) => {
	const [count, setCount] = useState(0);
	const [array, setArray] = useState([]);
	//const [arraySize, setArraySize] = useState(0)

	const arraySize = 450;

	useEffect(() => {
		resetArray();
		return () => {};
	}, []);

	const resetArray = () => {
		const array = [];
		for (let i = 0; i < arraySize; i++) {
			array.push(randomIntGenerator(5, 800));
		}
		setArray(array);
	};

	return (
		<div className='array-container'>
			{array.map((value, id) => (
				<div
					className='array-bar'
					key={id}
					style={{ height: `${value}px` }}
				></div>
			))}
			<button onClick={() => resetArray()}>Generate New Array</button>
		</div>
	);
};

const randomIntGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingAlgoVisualizer;
