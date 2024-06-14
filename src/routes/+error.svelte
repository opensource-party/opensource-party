<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} {$page.error?.message} | Open Source Party</title>
</svelte:head>