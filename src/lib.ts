export function* seq(start: number, end: number) {
	for (let i = start; i < end; i++) yield i;
}

export const create = (size: number) => [...seq(0, size * size)];

export const shuffle = (arr: number[]): number[] => arr.sort(() => Math.random() - 0.5);

export const sorted = (arr: number[]): boolean =>
	arr.slice(0, -1).reduce((prev, current, index) => prev && current - 1 === index, true);

const row = (index: number, size: number): number => Math.floor(index / size);

const column = (index: number, size: number): number => index % size;

export const movable = (arr: number[], size) => {
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
	const copy = [...arr];
	const tmp = copy[hole];
	copy[hole] = copy[index];
	copy[index] = tmp;
	return copy;
};
