import React, { useState, useEffect } from 'react';
import './SortingAlgoVisualizer.css';
import MergeSort from '../algorithms/mergeSort';

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

	const mergeSort = () => {};

	const bubbleSort = () => {};

	const heapSort = () => {};

	const quickSort = () => {};

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
			<button onClick={() => mergeSort()}>Merge Sort</button>
			<button onClick={() => bubbleSort()}>Bubble Sort</button>
			<button onClick={() => heapSort()}>Heap Sort</button>
			<button onClick={() => quickSort()}>Quick Sort</button>
		</div>
	);
};

const randomIntGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingAlgoVisualizer;
