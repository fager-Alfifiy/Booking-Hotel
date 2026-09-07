<script lang="ts">
	import HotelCard from "$lib/Booking/Hotelcard.svelte";
	import Hotelgallery from "$lib/Booking/Hotelgallery.svelte";
	import Roomcard from "$lib/Booking/Roomcard.svelte";
	
	interface hotels {
		id: number;
		name: string;
		city: string;
		country: string;
		starRating: number; 
		pricePerNight: number;
		currency: number;
		amenities: string[];
		thumbnailUrl: string;
		images: string[]; 
		address: string;
		phone: string;
		description: string;
	}

	interface Rooms {
		id: number;
		hotelId: number;
		type: String;
		capacity: number;
		price: number;
		available: Boolean;
		floor: number;
		bedType: String;
		images: string[];
	}

	let hotels: Hotels[] = $state([]);
let rooms: Rooms[] = $state([]);
let currentpage = $state(1);
	const pageSize = 10;

	let totalPages = $derived(Math.max(1, Math.ceil(hotels.length / pageSize)));
	let paginatedHotels = $derived(
		hotels.slice((currentpage - 1) * pageSize, currentpage * pageSize)
	);

	function gotopage(n: number) {
		if (n < 1 || n > totalPages) return;
		currentpage = n;
	}


	const url = "http://localhost:3000";
	const HotelsUrl = "hotels";
	const RoomsUrl = "rooms";
	async function getHotels() {
		try {
			const response = await fetch(`${url}/${HotelsUrl}`);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			hotels = await response.json();
		} catch (error) {
			console.error(error.message);
		}
	}

	async function getRooms() {
		try {
			const response = await fetch(`${url}/${RoomsUrl}`);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			rooms = await response.json();
		} catch (error) {
			console.error(error.message);
		}
	}
	getHotels();
	getRooms();
</script>

<section class="max-w-7xl mx-auto py-10 px-4">
	<h1 class="text-4xl font-bold mb-8">All Hotels</h1>
	<div class="grid grid-cols-2 gap-6">
		{#each paginatedHotels as hotel}
			<HotelCard {hotel} />
			<Hotelgallery {hotel} />
			{#each rooms.filter((room) => room.hotelId === hotel.id) as room}
				<Roomcard {room} {hotel} />
			{/each}
		{/each}
	</div>

	{#if totalPages > 1}
		<div class="flex justify-center items-center gap-2 mt-10">
			<button
				class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
				onclick={() => gotopage(currentpage - 1)}
				disabled={currentpage === 1}
			>
				back
			</button>

			{#each Array(totalPages) as _, i}
				<button
					class="px-4 py-2 rounded-lg border {currentpage === i + 1
						? 'bg-[#728156] text-white border-[#728156]'
						: 'border-gray-300 hover:bg-gray-100'}"
					onclick={() => gotopage(i + 1)}
				>
					{i + 1}
				</button>
			{/each}

			<button
				class="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
				onclick={() => gotopage(currentpage + 1)}
				disabled={currentpage === totalPages}
			>
				Next
			</button>
		</div>
	{/if}
</section>