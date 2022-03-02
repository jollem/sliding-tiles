<script lang="ts">
	import { size, tiles } from '../stores';
	import { sorted } from '../lib';

	let movable = [];

	const row = (index: number): number => Math.floor(index / $size);
	const column = (index: number): number => index % $size;
	const hole = $tiles.indexOf(0);

	$: {
		sorted($tiles) && alert('Yahoo!');
		movable = $tiles.reduce(
			(acc, curr, index) =>
				(row(index) === row(hole) && Math.abs(hole - index) === 1) ||
				(column(index) === column(hole) && Math.abs(hole - index) === $size)
					? [...acc, curr]
					: acc,
			[]
		);
	}
</script>

<div>
	<div>
		{#each $tiles as tile}
			<div
				class:hole={!tile}
				class:pointer={movable.includes(tile)}
				on:click={movable.includes(tile) ? () => console.log('foo') : undefined}
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
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		column-gap: 0.5em;
		row-gap: 0.5em;
	}
	div div div {
		width: 100px;
		height: 100px;
		background-color: black;
		border-radius: 0.5em;
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
