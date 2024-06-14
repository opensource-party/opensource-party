<script lang="ts">
	import ProjectOverview from '$c/ProjectOverview.svelte';

	export let data;
</script>

<ProjectOverview username={data.params.user} project={data.params.user} />