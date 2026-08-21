<!-- <script>
	import { filters } from "$lib/stores/filters";
</script>

<div class="bg-white rounded-xl shadow p-9">

	<h2 class="text-xl font-bold mb-9 text-[#2c4f31]">
		Filter
	</h2>

	<div class="mb-5">

		<label class="font-semibold text-gray-700">
			Search 
		</label>

		<input
			type="text"
			class="border rounded-lg w-full p-2 mt-3 focus:outline-none focus:ring-2 focus:ring-[#728156]"
			placeholder="Hotel or City"
			bind:value={$filters.search}
		/>

	</div>

	<div class="mb-5">

		<label class="font-semibold text-gray-700">
			Max Price: {$filters.maxPrice} SAR
		</label>

		<input
			type="range"
			min="1000"
			max="5000"
			step="500"
			class="w-full mt-3 accent-[#728156]"
			bind:value={$filters.maxPrice}
		/>

	</div>

	<div>

		<label class="font-semibold text-gray-700">
			Minimum Rating
		</label>

		<select
			class="border rounded-lg w-full p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#728156]"
			bind:value={$filters.Starrating}
		>
			<option value={0}>
				All
			</option>
			<option value={3}>
				3+
			</option>
			<option value={4}>
				4+
			</option>
			<option value={4.5}>
				4.5+
			</option>
		</select>
	</div>
</div> -->