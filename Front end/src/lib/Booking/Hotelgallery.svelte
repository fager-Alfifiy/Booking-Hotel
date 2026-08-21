<script>
	let { hotel } = $props();
</script>

<div class="grid grid-cols-2 gap-1">
	<img
		src={hotel.images[0]}
		alt={hotel.name}
		class="w-full h-80 object-cover rounded-xl col-span-2"
	/>
	<img
		src={hotel.images[1]}
		alt={hotel.name}
		class="w-full h-40 object-cover rounded-xl"
	/>
	<img
		src={hotel.images[2]}
		alt={hotel.name}
		class="w-full h-40 object-cover rounded-xl"
	/>
</div>
