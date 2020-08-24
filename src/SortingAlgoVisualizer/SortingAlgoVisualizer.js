import React, { useState, useEffect } from 'react';
import './SortingAlgoVisualizer.css';
import MergeSort from '../algorithms/mergeSort';

const SortingAlgoVisualizer = (props) => {
	const [count, setCount] = useState(0);
	const [array, setArray] = useState([]);
	//const [arraySize, setArraySize] = useState(0)

	const arraySize = vw(95) / 4;

	useEffect(() => {
		resetArray();
		return () => {};
	}, []);

	const resetArray = () => {
		const array = [];
		for (let i = 0; i < arraySize; i++) {
			array.push(randomIntGenerator(5, Math.floor(vh(83))));
		}
		setArray(array);
	};

	const mergeSort = () => {};

	const bubbleSort = () => {};

	const heapSort = () => {};

	const quickSort = () => {};

	return (
		<div className='container'>
			<div className='content'>
				<div className='array-container'>
					{array.map((value, id) => (
						<div
							className='array-bar'
							key={id}
							style={{ height: `${value}px` }}
						></div>
					))}
				</div>
			</div>
			<div className='dashboard'>
				<button onClick={() => resetArray()}>
					Generate New Array
				</button>
				<button onClick={() => mergeSort()}>Merge Sort</button>
				<button onClick={() => bubbleSort()}>Bubble Sort</button>
				<button onClick={() => heapSort()}>Heap Sort</button>
				<button onClick={() => quickSort()}>Quick Sort</button>
			</div>
		</div>
	);
};

const randomIntGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

//Viewport calculators

const vh = (v) => {
	var h = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight || 0
	);
	return Math.floor((v * h) / 100);
};

const vw = (v) => {
	var w = Math.max(
		document.documentElement.clientWidth,
		window.innerWidth || 0
	);
	return Math.floor((v * w) / 100);
};

const vmin = (v) => {
	return Math.min(vh(v), vw(v));
};

const vmax = (v) => {
	return Math.max(vh(v), vw(v));
};

//Logging values

console.log(
	vh(20),
	Math.max(
		document.documentElement.clientHeight,
		window.innerHeight || 0
	)
);
console.log(
	vw(30),
	Math.max(
		document.documentElement.clientWidth,
		window.innerWidth || 0
	)
);
console.log(vmin(20));
console.log(vmax(20));

export default SortingAlgoVisualizer;
