<script>
	import "../app.css";
	import Navbar from "$lib/Booking/Navbar.svelte";
	import Footer from "$lib/Booking/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="flex min-h-screen w-full min-w-0 flex-col">
	<Navbar />

	<main class="w-full min-w-0 flex-1 px-3 sm:px-5 lg:px-8">
		{@render children()}
	</main>

	<Footer />
</div>