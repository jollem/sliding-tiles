<script lang="ts">
	import { seq } from '../lib';
	import { size, init } from '../stores';

	const options = [...seq(1, 7)];
</script>

<nav>
	<h1>Sliding tiles</h1>
	<button on:click={init}>New game</button>
	<select bind:value={$size}>
		{#each options as option}
			<option selected={option === $size}>{option}</option>
		{/each}
	</select>
</nav>
