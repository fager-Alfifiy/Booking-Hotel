 <script>
	import { goto } from "$app/navigation";
	import GuestForm from "$lib/Booking/Guestfrom.svelte";
	import Pricesummary from "$lib/Booking/Pricesummary.svelte";
	import Payment from "$lib/Booking/Payment.svelte";
	function confirmBooking() {
		goto("/mybooking");
	}
</script>
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
				class="w-full bg-[#728156] text-white py-4 rounded-xl font-bold hover:bg-[#5f6d47] transition"
				onclick={confirmBooking}
			>
				Confirm Booking
			</button>
		</div>
	</div>
</section> 