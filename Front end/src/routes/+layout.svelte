<script>
	import "../app.css";
	import Navbar from "$lib/Booking/Navbar.svelte";
	import Footer from "$lib/Booking/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar />

	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>