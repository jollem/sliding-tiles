<script lang="ts">
	import Header from './header.svelte';
	import Board from './board.svelte';
</script>

<svelte:head>
	<title>Sliding tiles</title>
</svelte:head>

<div id="layout">
	<div>
		<Header />
	</div>
	<div>
		<Board />
	</div>
</div>

<style>
	#layout {
		height: 100vh;
		display: grid;
		grid-template-rows: 10vh 90vh;
	}
</style>
