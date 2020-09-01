//Top-Down mergeSort
const mergeSortComplete = (array) => {
	const animations = [];
	if (array.length <= 1) return array;
	const copyArray = array.slice();
	mergeSort(array, 0, array.length - 1, copyArray, animation);
	return animations;
};

const mergeSort = (arr, start, end, copyArray, animations) => {
	if (start === end) return;
	const mid = Math.floor((start + end) / 2);
	mergeSort(copyArray, start, mid, arr, animations);
	mergeSort(copyArray, mid + 1, end, arr, animations);
	merge(arr, start, mid, end, copyArray, animations);
};

const merge = (arr, start, mid, end, copyArray, animations) => {
	let x = start;
	let a = start;
	let b = mid + 1;
	while (a <= mid && b <= end) {
		animations.push([a, b]);
		animations.push([a, b]);
		if (copyArray[a] <= copyArray[b]) {
			animations.push([x, copyArray[a]]);
			array[x++] = copyArray[a++];
		} else {
			animations.push([x, copyArray[b]]);
			array[x++] = copyArray[b++];
		}
	}
};

export default mergeSortComplete;
