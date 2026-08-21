<script>
	import { booking } from "$lib/stores/booking";
</script>

<div class="bg-white rounded-xl shadow p-6">
	<h2 class="text-2xl font-bold mb-4">
		Booking Summary
	</h2>

	{#if $booking.hotel}
		<img
			src={$booking.hotel.images?.[0] ?? $booking.hotel.thumbnailUrl}
			alt={$booking.hotel.name}
			class="w-full h-56 object-cover rounded-lg"
		/>
		<h3 class="text-xl font-bold mt-4">
			{$booking.hotel.name}
		</h3>
		<p class="text-gray-500 mt-1">
			{$booking.hotel.city}
		</p>

		<div class="mt-5 space-y-3">
			<div class="flex justify-between">
				<span class="text-gray-500">
					Room
				</span>
				<span class="font-semibold">
					{$booking.room?.type}
				</span>
			</div>

			<div class="flex justify-between">
				<span class="text-gray-500">
					Guests
				</span>
				<span class="font-semibold">
					{$booking.guests}
				</span>
			</div>

			{#if $booking.checkIn}
				<div class="flex justify-between">
					<span class="text-gray-500">
						Check-in
					</span>
					<span class="font-semibold">
						{$booking.checkIn}
					</span>
				</div>
			{/if}

			{#if $booking.checkOut}
				<div class="flex justify-between">
					<span class="text-gray-500">
						Check-out
					</span>
					<span class="font-semibold">
						{$booking.checkOut}
					</span>
				</div>
			{/if}

			{#if $booking.total}
				<div class="border-t pt-4 flex justify-between">
					<span class="text-lg font-bold">
						Total
					</span>
					<span class="text-lg font-bold text-[#728156]">
						{$booking.total} SAR
					</span>
				</div>
			{/if}
		</div>
	{:else}
		<div class="text-center py-10">
			<p class="text-gray-500">
				No booking information available.
			</p>
		</div>
	{/if}
</div>