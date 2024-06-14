<script lang="ts">
	import UserProfile from '$c/UserProfile.svelte';

	export let data;
</script>

<UserProfile username={data.params.user} />
