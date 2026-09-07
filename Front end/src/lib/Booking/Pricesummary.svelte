<script>
	import { booking } from "$lib/stores/booking";

	const taxRate = 0.10; // 10%

	function removeItem(itemId) {
		booking.removeItem(itemId);
	}
	let subtotal = $derived(
		$booking.items.reduce((sum, item) => sum + item.room.price, 0)
	);
	let tax = $derived(subtotal * taxRate);
	let total = $derived(subtotal + tax);
</script>

<div class="bg-white rounded-xl shadow p-6">
	<h2 class="text-2xl font-bold mb-4">Price Summary</h2>

	{#if $booking.items.length === 0}
		<p class="text-gray-500">No rooms selected</p>
	{:else}
		<div class="space-y-3">
			{#each $booking.items as item (item.id)}
				<div class="flex justify-between rounded-lg border p-4">
					<div>
						<h3 class="font-semibold">
							{item.room.type} Room
						</h3>
						<p class="text-gray-500">
							{item.room.bedType} bed · {item.hotel?.name}
						</p>
						<p>
							{item.room.price} SAR / night
						</p>
					</div>
					<button
						onclick={() => removeItem(item.id)}
						class="rounded bg-red-500 px-3 py-1 text-white h-fit"
					>
						Remove
					</button>
				</div>
			{/each}
		</div>

		<div class="flex justify-between mt-4">
			<span class="text-gray-500">Subtotal</span>
			<span class="font-semibold">{subtotal.toFixed(2)} SAR</span>
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