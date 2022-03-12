<script lang="ts">
	import { size, tiles, legal, move } from '../store/game';
	import { sorted } from '../lib';

	$: {
		sorted($tiles) && alert('Yahoo!');
	}
</script>

<div>
	<div style="--size: {$size}">
		{#each $tiles as tile}
			<div
				class:hole={!tile}
				class:pointer={$legal.includes(tile)}
				on:click={$legal.includes(tile) ? () => move(tile) : undefined}
			>
				{tile}
			</div>
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
	div div div {
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 5px;
		color: white;
		font-size: clamp(2rem, 5vh, 4rem);
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: not-allowed;
	}

	.hole {
		background-color: white;
	}

	.pointer {
		cursor: pointer;
	}
</style>
