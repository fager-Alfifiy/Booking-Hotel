
<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<section class="relative h-[800px] w-full overflow-hidden">
	<img
		src="https://i.pinimg.com/1200x/ed/63/f8/ed63f88ba18ea9e9de31c7d9909cd2c2.jpg"
		alt="Luxury Hotel"
		class="absolute inset-0 h-full w-full object-cover"
	/>

	<div class="absolute inset-0 bg-black/60"></div>

	<div class="relative z-30 flex h-full items-center justify-center text-center">
		<div class="max-w-3xl px-2 text-white">

			<p class="mb-3 text-xl font-medium">
				Your journey starts here
			</p>

			<p class="mb-8 text-xl leading-relaxed text-center">
				Discover exceptional hotels, enjoy exclusive deals,
				and create unforgettable memories wherever you go.
			</p>

			<button
				onclick={() => goto('/hotels')}
				class="rounded-lg bg-white px-8 py-3 font-semibold text-gray-800 shadow-lg transition hover:scale-105 hover:bg-gray-100"
			>
				Explore Hotels
			</button>

		</div>
	</div>
</section>
