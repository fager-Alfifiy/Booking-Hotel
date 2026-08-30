
<script lang="ts">
	import { onMount } from "svelte";
import Searchbar from '$lib/Booking/Searchbar.svelte';
import { filters } from "$lib/stores/filters";
	import { goto } from "$app/navigation";
import Searchfilter from '$lib/Booking/Searchfilter.svelte';

interface Hotels {
		id: number;
		name: string;
		city: string;
		country: string;
		starRating: number;
		pricePerNight: number;
		currency: string;
		amenities: string[];
		thumbnailUrl: string;
		images: string[];
		address: string;
		phone: string;
		description: string;
	}
	let hotels: Hotels[] = $state([]);
	const url = "http://localhost:3000";
	async function getHotels() {
		try {
			const response = await fetch(`${url}/hotels`);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			hotels = await response.json();
		} catch (error) {
			console.error(error.message);
		}
	}

	onMount(() => {
		getHotels();
	});

	let results = $derived(hotels.filter((hotel) => {
const search  = $filters.search.trim().toLowerCase();const matchesSearch =search  === "" ||
	hotel.name.toLowerCase().indexOf(search ) !== -1 ||
	hotel.city.toLowerCase().indexOf(search ) !== -1;
	const matchesPrice = hotel.pricePerNight <= $filters.maxPrice;
const matchesRating = hotel.starRating >= $filters.Starrating;

return matchesSearch && matchesPrice && matchesRating;	}));
function viewDetails(hotelId: number) {	goto(`/hotels/${hotelId}`);}
</script>

<Searchbar />

<div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
	<div class="md:col-span-1">
		<Searchfilter />
	</div>

	<div class="md:col-span-3">
		<p class="text-gray-500 mb-4">{results.length} hotel(s) found</p>

		{#if results.length === 0}
			<div class="bg-white rounded-xl shadow p-10 text-center">
				<p class="text-xl font-semibold text-gray-700 mb-2">
					No hotels match your search
				</p>
				<p class="text-gray-500">
					Try adjusting your search term, price, or rating filters.
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each results as hotel (hotel.id)}
					<div class="bg-white rounded-xl overflow-hidden shadow">
						<img
							src={hotel.thumbnailUrl}
							alt={hotel.name}
							class="w-full h-48 object-cover"
						/>
						<div class="p-5">
							<h2 class="font-bold text-xl">{hotel.name}</h2>
							<p class="text-gray-500">{hotel.city}, {hotel.country}</p>
							<p class="mt-2">⭐ {hotel.starRating}</p>
							<p class="text-lg font-bold text-[#728156] mt-2">
								{hotel.pricePerNight} {hotel.currency} / night
							</p>
							<button
								class="bg-[#728156] text-white px-5 py-2 rounded-lg mt-4 w-full hover:bg-[#5f6d47] transition"
								onclick={() => viewDetails(hotel.id)}
							>
								View Details
							</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>