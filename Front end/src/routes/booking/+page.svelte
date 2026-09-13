<script lang="ts">
	import { goto } from "$app/navigation";
	import { booking } from "$lib/stores/booking";
	import GuestForm from "$lib/Booking/Guestfrom.svelte";
	import Pricesummary from "$lib/Booking/Pricesummary.svelte";
	import Payment from "$lib/Booking/Payment.svelte";

	const taxRate = 0.15;

	function confirmBooking() {
		if (!$booking.paymentMethod) return;
		if ($booking.items.length === 0) return;

		const subtotal = $booking.items.reduce((sum, item) => sum + item.room.price, 0);
		const tax = subtotal * taxRate;
		const total = subtotal + tax;

		
		const invoice = {
			id: Date.now(),
			date: new Date().toISOString(),
			items: $booking.items.map((item) => ({
				hotelName: item.hotel?.name ?? "",
				room: item.room?.type ?? "",
				pricePerNight: item.room?.price ?? 0
			})),
			guests: $booking.guests,
			checkIn: $booking.checkIn,
			checkOut: $booking.checkOut,
			paymentMethod: $booking.paymentMethod,
			subtotal,
			tax,
			total,
			status: "Confirmed"
		};

		try {
			const saved = localStorage.getItem("confirmedBookings");
			const list = saved ? JSON.parse(saved) : [];
			list.push(invoice);
			localStorage.setItem("confirmedBookings", JSON.stringify(list));
		} catch (e) {
			console.error(e);
		}

		booking.update((current) => ({
			...current,
			items: [],
			paymentMethod: ""
		}));

		goto("/mybooking");
	}

	function backToHotel() {
		goto("/hotels");
	}
</script>

{#if $booking.items.length > 0}

	<section class="max-w-7xl mx-auto py-10 px-4">
		<h1 class="text-4xl font-bold mb-8">
			Complete Your Booking
		</h1>

		<div class="grid lg:grid-cols-3 gap-8">

			<div class="lg:col-span-2 space-y-6">
				<GuestForm />
				<Payment />
			</div>

			<div class="space-y-6">
				<Pricesummary />

				<button
	class="w-full text-white py-4 rounded-xl font-bold transition
	{$booking.paymentMethod
		? 'bg-[#728156] hover:bg-[#5f6d47]'
		: 'bg-gray-300 cursor-not-allowed'}"
	disabled={!$booking.paymentMethod}
	onclick={confirmBooking}
>
	{$booking.paymentMethod
		? "Confirm Booking"
		: "Select a payment method to continue"}
</button>
			</div>
		</div>
	</section>

{:else}

	<section class="max-w-7xl mx-auto py-20 px-4">
		<div class="text-center">

			<h2 class="text-3xl font-bold text-gray-900 mb-4">
				No Room Selected
			</h2>

			<p class="text-gray-500 mb-6">
				Please select a room before continuing with your booking.
			</p>

			<button
				class="bg-[#728156] hover:bg-[#5f6d47] text-white px-6 py-3 rounded-xl font-bold transition"
				onclick={backToHotel}
			>
				← Back to Hotel
			</button>

		</div>
	</section>

{/if}