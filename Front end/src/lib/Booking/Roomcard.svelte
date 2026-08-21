
<script>
import { goto } from "$app/navigation";
	import { booking } from "$lib/stores/booking";
	let { room, hotel } = $props();

	function reserve() {
		booking.update((current) => ({
			...current,
			hotel,
			room
		}));

		goto("/booking");
	}
</script>
<div class="bg-white rounded-xl shadow p-5">
	<h2 class="text-xl font-bold mb-2">
		{room.type} Room
	</h2>

	<p class="text-gray-500 mb-1">
		{room.bedType} bed · Floor {room.floor}
	</p>

	<p class="text-gray-500 mb-2">
		Capacity: {room.capacity} guests
	</p>

	<p class="text-lg font-bold">
		{room.price} SAR / night
	</p>
	<p class="text-sm mt-1 {room.available ? 'text-green-600' : 'text-red-600'}">
		{room.available ? 'Available' : 'Not Available'}
	</p>

	<button
		onclick={reserve}

		class="mt-4 w-full bg-[#728156] text-white py-2 rounded-lg hover:opacity-90"
	>Select Room
	</button>
</div>