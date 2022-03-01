import { get, writable } from 'svelte/store';
import { create, shuffle } from './lib';

const INITIAL_SIZE = 4;

export const size = writable(0);
export const tiles = writable([]);

export const init = () => tiles.set(shuffle(create(get(size))));

size.subscribe(init);

size.set(INITIAL_SIZE);
