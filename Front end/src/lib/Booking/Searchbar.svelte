<script>
	import { filters } from "$lib/stores/filters";
	import { goto } from "$app/navigation";

	let checkIn = "";
	let checkOut = "";

	function search() {
		filters.update((current) => ({
			...current,
			checkIn,
			checkOut
		}));

		goto("/search");
	}
</script>

<div class="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-5 -mt-0 relative z-10">

	<div class="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">

		<div>
			<label class="block text-sm font-semibold text-gray-700 mb-2">
				Destination
			</label>

			<input
				type="text"
				placeholder="Hotel or City"
				bind:value={$filters.search}
				class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#728156]"
			/>
		</div>


		<div>
			<label class="block text-sm font-semibold text-gray-700 mb-2">
				Check In
			</label>

			<input
				type="date"
				bind:value={checkIn}
				class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#728156]"
			/>
		</div>


		<div>
			<label class="block text-sm font-semibold text-gray-700 mb-2">
				Check Out
			</label>

			<input
				type="date"
				bind:value={checkOut}
				class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#728156]"
			/>
		</div>

		<div>
			<label class="block text-sm font-semibold text-gray-700 mb-2">
				Rating
			</label>

			<select
				bind:value={$filters.Starrating}
				class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#728156]"
			>
				<option value={0}>All</option>
				<option value={3}>3+</option>
				<option value={4}>4+</option>
				<option value={4.5}>4.5+</option>
			</select>
		</div>

		<div>
			<label class="block text-sm font-semibold text-gray-700 mb-2">
				Max Price
			</label>

			<div class="flex items-center gap-2 h-[46px]">
				<input
					type="range"
					min="1000"
					max="5000"
					step="500"
					bind:value={$filters.maxPrice}
					class="w-full accent-[#728156]"
				/>

				<span class="text-sm font-semibold whitespace-nowrap">
					{$filters.maxPrice} SAR
				</span>
			</div>
		</div>
		
		<button
			class="bg-[#728156] text-white rounded-lg px-5 py-3 hover:bg-[#5f6d47] transition h-[46px]"
			onclick={search}
		>
			Search
		</button>
	</div>
</div>