<script lang="ts">
	import '../styles/global.scss';
</script>

<nav class="fixed w-full top-0 left-0 bg-green-600 text-white h-12 flex items-center p-2">
	<header class="font-black text-2xl">
		<a href="/">
			<span>open</span>
			<span>source</span>
			<span>party</span>
		</a>
	</header>
</nav>

<main class="mt-12 min-h-[calc(100vh-3rem)] p-2 bg-green-700 text-white">
	<slot />
</main>

<footer class="p-2 bg-green-800 text-white text-center transition underline decoration-transparent">
	&copy; 2024 <a href="https://github.com/opensource-party/opensource-party/graphs/contributors"
		>Open Source Party contributors</a
	>
</footer>
