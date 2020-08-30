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

const merge = (arr, start, mid, end, copyArray, animations) => {};

export default mergeSortComplete;
