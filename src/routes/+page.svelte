<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>Data: {@html data}</div>

<script>
	import { onMount } from 'svelte';

	let data = '';

	onMount(async () => {
		const resp = await fetch('/api/medium');
		data = await resp.text();
	});
</script>