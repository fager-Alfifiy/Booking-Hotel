<script lang="ts">
	let { hotel } = $props();
</script>

<div class="max-w-5xl mx-auto px-4 py-10">

	<div class="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">

		<div class="w-full h-[380px] overflow-hidden">
			<img
				src={hotel.images}
				alt={hotel.name}
				class="w-full h-full object-cover hover:scale-105 transition duration-500"
			/>
		</div>
		<div class="p-8">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h1 class="text-3xl font-bold text-[#2c4f31]">
						{hotel.name}
					</h1>
					<p class="text-gray-500 mt-2">
						📍 {hotel.city}, {hotel.country}
					</p>
				</div>
				<div class="bg-[#728156] text-white px-6 py-3 rounded-2xl text-center">
					<p class="text-sm opacity-90">Price per night</p>
					<p class="text-2xl font-bold">
						{hotel.pricePerNight} {hotel.currency}
					</p>
				</div>
			</div>
			<div class="border-t border-gray-200 my-7"></div>
			<div class="mb-7">
				<h2 class="text-xl font-bold text-[#2c4f31] mb-3">
					About the Hotel
				</h2>
				<p class="text-gray-600 leading-7">
					{hotel.description}
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div class="bg-[#f6f7f2] rounded-2xl p-5">
					<p class="text-sm text-gray-500 mb-1">Phone Number</p>
					<p class="font-semibold text-[#2c4f31]">
						{hotel.phone}
					</p>
				</div>
				<div class="bg-[#f6f7f2] rounded-2xl p-5">
					<p class="text-sm text-gray-500 mb-1">Address</p>
					<p class="font-semibold text-[#2c4f31]">
						{hotel.address}
					</p>
				</div>
			</div>
			<div class="mt-7 flex items-center gap-3">
				<span class="text-yellow-500 text-xl">★</span>
				<span class="font-bold text-gray-700">
					{hotel.starRating} 
				</span>
			</div>
		</div>
	</div>
</div> 