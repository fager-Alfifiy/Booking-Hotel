<script lang="ts">
	import Roomcard from '$lib/Booking/Roomcard.svelte';
	import Hoteldetails from '$lib/Booking/Hoteldetails.svelte';
	import { page } from "$app/stores";

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

	interface Rooms {
		id: number;
		hotelId: number;
		type: string;
		capacity: number;
		price: number;
		available: boolean;
		floor: number;
		bedType: string;
		images: string[];
	}

	let hotel: Hotels | null = $state(null);
	let rooms: Rooms[] = $state([]);

	const url = "http://localhost:3000";
	const HotelsUrl = "hotels";
	const RoomsUrl = "rooms";

	async function getHotel(id: string) {
		try {
			const response = await fetch(`${url}/${HotelsUrl}/${id}`);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			hotel = await response.json();
		} catch (error) {
			console.error(error.message);
		}
	}

	async function getRooms(id: string) {
		try {
			const response = await fetch(`${url}/${RoomsUrl}?hotelId=${id}`);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			rooms = await response.json();
		} catch (error) {
			console.error(error.message);
		}
	}
	
if (id) {
    const hotelId = Number(id);

        getHotel(hotelId);
        getRooms(hotelId);
    };

	
</script>

<section class="mx-auto max-w-7xl px-4 py-10">
	{#if hotel}
		<Hoteldetails {hotel} />
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each rooms as room (room.id)}
	<Roomcard {room} {hotel} />
{/each}
		</div>
	{/if}
</section>