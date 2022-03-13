<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { size, tiles, legal, move, solved } from '../store';
	import Tile from './Tile.svelte';
</script>

<section>
	<div class="wrapper">
		<div class="board tiles" style="--size: {$size}">
			{#each $tiles as tile (tile)}
				<div animate:flip={{ duration: 300 }}>
					<Tile
						{tile}
						movable={$legal.includes(tile)}
						on:click={$legal.includes(tile) ? () => move(tile) : undefined}
					/>
				</div>
			{/each}
		</div>
		{#if $solved}
			<div in:scale={{ delay: 250, duration: 750 }} class="board trophy">
				<img src="/trophy.svg" alt="Congratulations" />
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		display: grid;
		justify-content: center;
		align-content: center;
	}
	.board {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
	}
	.wrapper {
		width: 75vh;
		height: 75vh;
		position: relative;
	}
	.tiles {
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		column-gap: 2px;
		row-gap: 2px;
	}
	.trophy {
		z-index: 100;
		background-color: rgba(255, 255, 255, 0);
		display: grid;
		justify-content: center;
		align-content: center;
	}
	img {
		height: 50vh;
	}
</style>
