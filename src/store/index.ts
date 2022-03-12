import { get, writable, derived } from 'svelte/store';
import { create, shuffle, movable, swap } from '../lib';

const INITIAL_SIZE = 4;

export const size = writable(0);
export const tiles = writable<number[]>([]);
export const legal = derived(tiles, ($tiles) => movable($tiles, get(size)));

export const init = () => tiles.set(shuffle(create(get(size)), get(size)));

export const move = (tile: number) => tiles.update((tiles) => swap(tiles, tile));

size.subscribe(init);

size.set(INITIAL_SIZE);
