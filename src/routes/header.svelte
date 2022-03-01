<script lang="ts">
	import { size } from '../stores';

	const options = [2, 3, 4, 5, 6];
</script>

<nav>
	<h1>Sliding tiles</h1>
	<select bind:value={$size}>
		{#each options as option}
			<option selected={option === $size}>{option}</option>
		{/each}
	</select>
</nav>
