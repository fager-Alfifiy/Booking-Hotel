<script lang="ts">
	import { goto } from '$app/navigation';
</script>
<div class="w-full bg-red-900 px-4 py-3 text-center font-semibold text-white">
	20% Off for New Customers - Book Your First Stay Now
	
</div>
<section class="relative h-[600px] w-full overflow-hidden md:h-[750px]">
	<img
		src="https://i.pinimg.com/1200x/ed/63/f8/ed63f88ba18ea9e9de31c7d9909cd2c2.jpg"
		alt="Luxury Hotel"
		class="absolute inset-0 h-full w-full scale-105 object-cover"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
	<div class="relative z-30 flex h-full items-center justify-center text-center">
		<div class="max-w-3xl px-4 text-white">
			<span
				class="mb-4 inline-block rounded-full border border-white/40 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide backdrop-blur-sm"
			>
				✦ Trusted by travelers worldwide
			</span>

			<h1 class="mb-4 text-4xl font-extrabold leading-tight drop-shadow-lg md:text-6xl">
				Your journey starts here
			</h1>

			<p class="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
				Discover exceptional hotels, enjoy exclusive deals,
				and create unforgettable memories wherever you go.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<button
					onclick={() => goto('/hotels')}
					class="w-full rounded-lg border border-white/70 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10 sm:w-auto"
				>
					Explore Hotels
				</button>

				<button
					onclick={() => goto('/search')}
					class="w-full rounded-lg border border-white/70 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10 sm:w-auto"
				>
					Search Destinations
				</button>
			</div>
		</div>
	</div> </section>