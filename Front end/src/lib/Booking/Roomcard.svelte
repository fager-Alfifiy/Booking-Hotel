
<script>
	import { goto } from "$app/navigation";
	import { booking } from "$lib/stores/booking";
	let { room, hotel } = $props();

	function reserve() {
		if (!room.available) return;

		booking.addItem(hotel, room);

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
		disabled={!room.available}
		class="mt-4 w-full text-white py-2 rounded-lg transition {room.available
			? 'bg-[#728156] hover:opacity-90'
			: 'bg-gray-300 cursor-not-allowed'}"
	>{room.available ? 'Select Room' : 'Not Available'}
	</button>
</div>