
<script>
	import { goto } from "$app/navigation";
</script>

<nav class="bg-[#3A4630] text-[#FFF8DC] shadow">
	<div class="max-w-7xl mx-auto flex justify-between items-center p-4">

		<h1 class="text-4xl [font-family:Ayah]">
		<button onclick={() => goto('/')}>
			BOOKING
		</button>
		</h1>

		<div class="flex gap-10 [font-family:Almarai]">
			<button onclick={() => goto('/search')}>
			Search
		</button>

			<button onclick={() => goto("/hotels")}>
				Hotels
			</button>

			<button onclick={() => goto("/booking")}>
				Booking
			</button>

			<button onclick={() => goto("/mybooking")}>
				My Bookings
			</button>

		</div>
	</div>
</nav>
