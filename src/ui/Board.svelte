<script lang="ts">
	import { size, tiles, legal, move } from '../store';
	import { sorted } from '../lib';
	import Tile from './Tile.svelte';

	$: {
		sorted($tiles) && alert('Yahoo!');
	}
</script>

<div>
	<div style="--size: {$size}">
		{#each $tiles as tile}
			<Tile
				{tile}
				movable={$legal.includes(tile)}
				on:click={$legal.includes(tile) ? () => move(tile) : undefined}
			/>
		{/each}
	</div>
</div>

<style>
	div {
		display: grid;
		justify-content: center;
		align-content: center;
	}
	div div {
		height: 75vh;
		width: 75vh;
		display: grid;
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		column-gap: 2px;
		row-gap: 2px;
	}
</style>
