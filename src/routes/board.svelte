<script lang="ts">
	import { tiles } from '../stores';
	import { sorted } from '../lib';

	$: {
		sorted($tiles) && alert('Yahoo!');
	}
</script>

<pre>{JSON.stringify($tiles, undefined, 4)}</pre>
