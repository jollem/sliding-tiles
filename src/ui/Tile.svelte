<script type="ts">
	export let tile: number;
	export let movable: boolean;
</script>

<div on:click class:hole={!tile} class:pointer={movable}>{tile}</div>

<style>
	div {
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 0.25rem;
		color: white;
		font-size: clamp(2rem, 5vh, 4rem);
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: not-allowed;
	}

	.hole {
		display: none;
	}

	.pointer {
		cursor: pointer;
	}
</style>
