<script>
	import { goto } from "$app/navigation";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

	let { hotel } = $props();

function details() {
		goto(`/hotels/${hotel.id}`);
	}
	import {
		faWifi,
		faPersonSwimming,
		faUtensils,
		faSquareParking,
		
	} from "@fortawesome/free-solid-svg-icons";
</script>

<div class="bg-white rounded-xl overflow-hidden shadow">
	<img
		src={hotel.images[3]}
		alt={hotel.name}
		class="w-full h-56 object-cover"
	/>

	<div class="p-5">
		<h2 class="font-bold text-xl">
			{hotel.name}
		</h2>

		<p class="text-gray-500">
			{hotel.city}
		</p>

		<p class="mt-2">
			{hotel.rating}
		</p>

		<p class="mt-4">
			⭐ {hotel.starRating}
		</p>

		<p class="text-2xl font-bold text-[#728156] mt-4">
			{hotel.pricePerNight} SAR / Night
		</p>
		

		<p class="mt-2 text-gray-700 leading-6">
					{hotel.description} 

		</p>

  <div class="flex items-center gap-3 mt-5">
	{#each hotel.amenities as amenity}

		{#if amenity === "wifi"}
			<div class="text-blue-600">
				<FontAwesomeIcon icon={faWifi} />
			</div>

		{:else if amenity === "restaurant"}
			<div class="text-orange-600">
				<FontAwesomeIcon icon={faUtensils} />
			</div>

		{:else if amenity === "pool"}
			<div class="text-cyan-600">
				<FontAwesomeIcon icon={faPersonSwimming} />
			</div>

		{:else if amenity === "airport_shuttle"}
			<div class="text-green-600">
				<FontAwesomeIcon icon={faSquareParking} />
			</div>

		{:else if amenity === "room_service"}
			<div class="text-purple-600">
				<FontAwesomeIcon icon={faUtensils} />
			</div>

		{:else if amenity === "beach_access"}
			<div class="text-cyan-600">
				<FontAwesomeIcon icon={faPersonSwimming} />
			</div>

		{/if}

	{/each}
</div> 


		<button
			class="bg-[#728156] text-white px-5 py-2 rounded-lg mt-4 w-full hover:bg-[#5f6d47] transition"
			onclick={details}
		>
			View Details
		</button>
	</div>
</div>
