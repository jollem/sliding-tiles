<script lang="ts">
	import { seq } from '../lib';
	import { size, reset } from '../store';

	const options = [...seq(2, 9)];
</script>

<nav>
	<select bind:value={$size}>
		{#each options as value}
			<option {value}>{value}</option>
		{/each}
	</select>
	<button on:click={() => reset($size)}>New game</button>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	button {
		background-color: black;
		color: white;
		font-size: 2rem;
		font-weight: bold;
		padding: 0.25rem 1rem;
		cursor: pointer;
		border-radius: 0.25rem;
	}

	select {
		font-size: 2rem;
		font-weight: bold;
		width: 4rem;
		text-align: right;
		border-radius: 0.25rem;
	}
</style>
