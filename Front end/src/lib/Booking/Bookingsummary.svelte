<script lang="ts">

	let { bookings = [] } = $props();
</script>

<div class="bg-white rounded-xl shadow p-6">
	<h2 class="text-2xl font-bold mb-4">
		Booking Summary
	</h2>

	{#if bookings.length > 0}
		<div class="space-y-4">
			{#each bookings as booking (booking.id)}
				<div class="flex justify-between border-b pb-4">
					<div>
						<h3 class="font-semibold">
							{booking.hotelName}
						</h3>
						<p class="text-gray-500">
							{booking.room}
						</p>
					</div>
					<p class="font-semibold text-[#728156]">
						{booking.pricePerNight} SAR
					</p>
				</div>
			{/each}
		</div>
	{:else}
		<div class="text-center py-10">
			<p class="text-gray-500">
				No booking information available.
			</p>
		</div>
	{/if}
</div>