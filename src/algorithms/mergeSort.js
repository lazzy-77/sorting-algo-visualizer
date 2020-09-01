//Top-Down mergeSort
const MergeSort = (array) => {
	const animations = [];
	if (array.length <= 1) return array;
	const copyArray = array.slice();
	mergeSort(array, 0, array.length - 1, copyArray, animations);
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
			arr[x++] = copyArray[a++];
		} else {
			animations.push([x, copyArray[b]]);
			arr[x++] = copyArray[b++];
		}
	}
	while (a <= mid) {
		animations.push([a, a]);
		animations.push([a, a]);
		animations.push([x, copyArray[a]]);
		arr[x++] = copyArray[a++];
	}
	while (b <= end) {
		animations.push([b, b]);
		animations.push([b, b]);
		animations.push([x, copyArray[b]]);
		arr[x++] = copyArray[b++];
	}
};

export default MergeSort;
