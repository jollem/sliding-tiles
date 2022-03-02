import { get, writable } from 'svelte/store';
import { create, shuffle, movable, swap } from './lib';

const INITIAL_SIZE = 4;

export const size = writable(0);
export const tiles = writable<number[]>([]);
export const legal = writable<number[]>([]);

export const init = () => tiles.set(shuffle(create(get(size))));

export const move = (tile: number) => tiles.set(swap(get(tiles), tile));

size.subscribe(init);

tiles.subscribe(() => legal.set(movable(get(tiles), get(size))));

size.set(INITIAL_SIZE);
