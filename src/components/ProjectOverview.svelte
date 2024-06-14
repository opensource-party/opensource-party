<script lang="ts">
  export let username: string | undefined = undefined;
  export let project: string;
</script>

<svelte:head>
  <title>Project {username ? `@${username}/` : ''}{project} | Open Source Party</title>
</svelte:head>

<main>
  <h1>{project}{username ? ` by ${username}` : ''}</h1>
</main>