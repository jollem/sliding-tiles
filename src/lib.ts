export function* seq(start: number, end: number) {
	for (let i = start; i < end; i++) yield i;
}

export const create = (size: number) => [...seq(0, size * size)];

export const shuffle = (arr: number[]): number[] => arr.sort(() => Math.random() - 0.5);

export const sorted = (arr: number[]): boolean =>
	arr.slice(0, -1).reduce((prev, current, index) => prev && current - 1 === index, true);
