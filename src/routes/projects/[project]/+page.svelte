<script lang="ts">
	import ProjectOverview from '$c/ProjectOverview.svelte';

	export let data;
</script>

<ProjectOverview project={data.params.project} />