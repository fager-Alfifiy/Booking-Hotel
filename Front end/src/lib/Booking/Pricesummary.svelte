<script>
	import { booking } from "$lib/stores/booking";
const taxRate = 0.10;
	function removeRoom() {
		booking.remove();
	}
</script>
<div class="bg-white rounded-xl shadow p-6">
	<h2 class="text-2xl font-bold mb-4">Price Summary</h2>

	{#if !$booking.room}
		<p class="text-gray-500">No room selected</p>
	{:else}
		{@const tax = $booking.room.price * taxRate}
		{@const total = $booking.room.price + tax}

		<div class="flex justify-between rounded-lg border p-4">
			<div>
				<h3 class="font-semibold">
					{$booking.room.type} Room
				</h3>
				<p class="text-gray-500">
					{$booking.room.bedType} bed · {$booking.hotel?.name}
				</p>
				<p>
					{$booking.room.price} SAR / night
				</p>
			</div>
			<button
				onclick={removeRoom}
				class="rounded bg-red-500 px-3 py-1 text-white h-fit"
			>
				Remove
			</button>
		</div>

		<div class="flex justify-between mt-4">
			<span class="text-gray-500">Room Price</span>
			<span class="font-semibold">{$booking.room.price} SAR</span>
		</div>

		<div class="flex justify-between mt-3">
			<span class="text-gray-500">Tax (10%)</span>
			<span class="font-semibold">{tax.toFixed(2)} SAR</span>
		</div>

		<hr class="my-4" />

		<div class="flex justify-between">
			<span class="font-bold text-xl">Total</span>
			<span class="font-bold text-xl text-[#728156]">
				{total.toFixed(2)} SAR
			</span>
		</div>
	{/if}
</div>