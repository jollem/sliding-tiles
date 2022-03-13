export function* seq(start: number, end: number) {
	for (let i = start; i < end; i++) yield i;
}

const create = (size: number) => [...seq(1, size * size), 0];

const shuffle = (arr: number[]): number[] =>
	[...seq(0, arr.length * 50)].reduce((acc) => {
		const legal = movable(acc);
		const random = Math.floor(Math.random() * legal.length);
		return swap(acc, legal[random]);
	}, arr);

export const init = (size: number) => shuffle(create(size));

export const sorted = (arr: number[]): boolean =>
	arr.slice(0, -1).reduce((prev, current, index) => prev && current - 1 === index, true);

const row = (index: number, size: number): number => Math.floor(index / size);

const column = (index: number, size: number): number => index % size;

export const movable = (arr: number[]) => {
	const size = Math.sqrt(arr.length);
	const hole = arr.indexOf(0);
	return arr.reduce(
		(acc, curr, index) =>
			(row(index, size) === row(hole, size) && Math.abs(hole - index) === 1) ||
			(column(index, size) === column(hole, size) && Math.abs(hole - index) === size)
				? [...acc, curr]
				: acc,
		[]
	);
};

export const swap = (arr: number[], tile: number): number[] => {
	const hole = arr.indexOf(0);
	const index = arr.indexOf(tile);
	[arr[hole], arr[index]] = [arr[index], arr[hole]];
	return arr;
};
