import { writable, derived } from 'svelte/store';
import { init, movable, swap, sorted } from '../lib';

const INITIAL_SIZE = 4;

export const size = writable(INITIAL_SIZE);
export const tiles = writable<number[]>([]);
export const legal = derived(tiles, ($tiles) => movable($tiles));
export const solved = derived(tiles, ($tiles) => sorted($tiles));

export const reset = (size: number) => tiles.set(init(size));

export const move = (tile: number) => tiles.update((tiles) => swap([...tiles], tile));

size.subscribe(reset);
