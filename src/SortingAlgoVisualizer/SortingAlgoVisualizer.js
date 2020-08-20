import React, { useState } from 'react';
import './SortingAlgoVisualizer.css';

const SortingAlgoVisualizer = (props) => {
	const [count, setCount] = useState(0);
	const [array, setArray] = useState([]);

	useEffect(() => {
		resetArray();
		return () => {
			cleanup;
		};
	}, [input]);

	const resetArray = () => {
		const array = [];
		for (let i = 0; i < 100; i++) {
			array.push(randomIntGenerator(5, 1000));
		}
		setArray(array);
	};

	return (
		<>
			{array.map((value, id) => (
				<div className='array-bar' key={id}>
					{value}
				</div>
			))}
		</>
	);
};

const randomIntGenerator = (min, max) => {};

export default SortingAlgoVisualizer;
