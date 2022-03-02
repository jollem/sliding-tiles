<script lang="ts">
	import { seq } from '../lib';
	import { size, init } from '../stores';

	const options = [...seq(3, 9)];
</script>

<nav>
	<select bind:value={$size}>
		{#each options as option}
			<option selected={option === $size}>{option}</option>
		{/each}
	</select>
	<button on:click={init}>New game</button>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
	}

	button {
		background-color: black;
		color: white;
		font-size: 2em;
		cursor: pointer;
	}

	select {
		font-size: 2em;
		font-weight: bold;
		width: 3em;
	}
</style>
