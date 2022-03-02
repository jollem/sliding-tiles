<script lang="ts">
	import { tiles, legal, move } from '../stores';
	import { sorted } from '../lib';

	$: {
		sorted($tiles) && alert('Yahoo!');
	}
</script>

<div>
	<div>
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
		--size: 4;
		height: 75vh;
		width: 75vh;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		column-gap: 0.2em;
		row-gap: 0.2em;
	}
	div div div {
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 0.4em;
		color: white;
		font-size: 2em;
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
