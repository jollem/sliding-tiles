<script lang="ts">
	import Header from '../ui/Header.svelte';
	import Board from '../ui/Board.svelte';
</script>

<svelte:head>
	<title>Sliding tiles</title>
</svelte:head>

<div>
	<Header />
	<Board />
</div>

<style>
	div {
		height: 100vh;
		display: grid;
		grid-template-rows: 5vh 90vh;
	}
</style>
