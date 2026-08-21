<script lang="ts">
	import Bookingsummary from "$lib/Booking/Bookingsummary.svelte";

	let bookings = [];
</script>

<svelte:head>
	<title>My Bookings</title>
</svelte:head>

<main class="flex-1 px-4 py-12">
	<div class="max-w-7xl mx-auto">

		<h1 class="text-4xl font-bold text-gray-900 mb-8">
			My Bookings
		</h1>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{#each bookings as booking}
				<div class="bg-white rounded-2xl shadow-sm p-6">

					<div class="text-center border-b pb-6 mb-6">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
						>
							<span class="text-3xl text-green-600">
								✓
							</span>
						</div>

						<h2 class="text-2xl font-bold text-gray-900">
							Booking Confirmed!
						</h2>

						<p class="text-gray-600 mt-2">
							Your reservation has been successfully confirmed.
						</p>

						<p class="text-sm text-gray-500 mt-2">
							Booking ID:
							<span class="font-semibold text-gray-700">
								#{booking.id}
							</span>
						</p>
					</div>

					<div class="space-y-4">
						<div>
							<p class="text-sm text-gray-500">Hotel</p>
							<p class="text-lg font-bold">
								{booking.hotelName}
							</p>
						</div>

						<div>
							<p class="text-sm text-gray-500">Room</p>
							<p class="font-semibold">
								{booking.room}
							</p>
						</div>

						<div>
							<p class="text-sm text-gray-500">Price</p>
							<p class="text-lg font-bold">
								{booking.pricePerNight}
							</p>
						</div>

						<div>
							<p class="text-sm text-gray-500">Status</p>
							<span
								class="inline-block mt-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
							>
								{booking.status}
							</span>
						</div>
					</div>

				</div>
			{/each}
		</div>

	</div>
</main>

<Bookingsummary />