<script lang="ts">
	import HotelCard from "$lib/Booking/Hotelcard.svelte";
	import Hotelgallery from "$lib/Booking/Hotelgallery.svelte";
	import Roomcard from "$lib/Booking/Roomcard.svelte";
 
	interface Hotels {
		id: number;
		name: string;
		city: string;
		country: string;
		starRating: number; // 1-5
		pricePerNight: number;
		currency: number;
		amenities: string[];
		thumbnailUrl: string;
		images: string[]; // gallery photos, independent of thumbnailUrl
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
		{#each hotels as hotel}
			<HotelCard {hotel} />
			<Hotelgallery {hotel} />
			{#each rooms.filter((room) => room.hotelId === hotel.id) as room}
				<Roomcard {room} />
			{/each}
		{/each}
	</div>
</section>