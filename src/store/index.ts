import { writable, derived } from 'svelte/store';
import { create, shuffle, movable, swap } from '../lib';

const INITIAL_SIZE = 4;

export const size = writable(INITIAL_SIZE);
export const tiles = writable<number[]>([]);
export const legal = derived([tiles, size], ([$tiles, $size]) => movable($tiles, $size));

export const init = (size: number) => tiles.set(shuffle(create(size), size));

export const move = (tile: number) => tiles.update((tiles) => swap([...tiles], tile));

size.subscribe(init);
