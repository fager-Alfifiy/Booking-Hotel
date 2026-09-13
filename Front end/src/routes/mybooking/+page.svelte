<script lang="ts">
	import { onMount } from "svelte";
	import { afterNavigate } from "$app/navigation";
import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
import { faPrint,faCalendarDays } from "@fortawesome/free-solid-svg-icons";
	let bookings: any[] = $state([]);
	let printingId: number | null = $state(null);

	function loadBookings() {
		try {
			const saved = localStorage.getItem("confirmedBookings");
			const parsed = saved ? JSON.parse(saved) : [];

			bookings = Array.isArray(parsed)
				? parsed.filter((b) =>b &&
		Array.isArray(b.items) && typeof b.subtotal === "number" &&
typeof b.tax === "number" && typeof b.total === "number"): [];
		} 
		catch {bookings = [];}

	}
	onMount(() => {
		loadBookings();});

	afterNavigate(() => {
		loadBookings();});

	function formatDate(date: string) {
		try {return new Date(date).toLocaleString();
		} catch {return date;}
	}

	function cancelBooking(invoiceId: number) {
		if (!confirm("Are you sure you want cancel?")) {return;
		}
		bookings = bookings.filter((booking) => booking.id !== invoiceId);
		localStorage.setItem( 
			"confirmedBookings",
			JSON.stringify(bookings));}

			
	function printInvoice(invoiceId: number) {
		printingId = invoiceId;
		setTimeout(() => {
			window.print();
		}, 40);

		const resetAfterPrint = () => {
			printingId = null;
			window.removeEventListener("afterprint", resetAfterPrint);
		};
		window.addEventListener("afterprint", resetAfterPrint);}

</script>

<svelte:head>
	<title>My Bookings</title>
</svelte:head>

<main class="flex-1 px-4 py-12">
	<div class="max-w-7xl mx-auto">
		<h1 class="text-4xl font-bold text-gray-900 mb-8">
			My Bookings
		</h1>

		{#if bookings.length === 0}
		<div class="bg-white rounded-2xl shadow-sm p-10 text-center">
	<div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
		<FontAwesomeIcon icon={faCalendarDays} class="text-4xl text-gray-400" />
	</div>

				<h2 class="text-2xl font-bold mb-3">
					No bookings yet
				</h2>

				<p class="text-gray-500 mb-6">
					Your confirmed bookings will appear here.
				</p>

				<a
					href="/hotels"
					class="inline-block rounded-xl bg-[#49724a] px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
				>
					Book a Hotel
				</a>
			</div>
		{:else}
			<div class="space-y-8">
				{#each bookings as invoice (invoice.id)}
					<div class="bg-white rounded-2xl shadow-sm p-6 md:p-8">

						<div class="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-6 mb-6 gap-4">
							<div class="flex items-center gap-4">
								<div class="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 shrink-0">
									<span class="text-2xl text-green-600">✓</span>
								</div>

								<div>
									<h2 class="text-xl font-bold text-gray-900">
										Booking Confirmed!
									</h2>

									<p class="text-sm text-gray-500">
										Invoice #{invoice.id} · {formatDate(invoice.date)}
									</p>
								</div>
							</div>

							<span class="inline-block w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
								{invoice.status}
							</span>
						</div>

						<div class="space-y-3 mb-6">
							{#each invoice.items as line}
								<div class="flex justify-between border-b pb-3">
									<div>
										<p class="font-semibold">
											{line.hotelName}
										</p>

										<p class="text-sm text-gray-500">
											{line.room} Room
										</p>
									</div>

									<p class="font-semibold">
										{line.pricePerNight} SAR / night
									</p>
								</div>
							{/each}
						</div>

						<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-sm">
							<div>
								<p class="text-gray-500">Guests</p>
								<p class="font-semibold">{invoice.guests}</p>
							</div>

							{#if invoice.checkIn}
								<div>
									<p class="text-gray-500">Check-in</p>
									<p class="font-semibold">{invoice.checkIn}</p>
								</div>
							{/if}

							{#if invoice.checkOut}
								<div>
									<p class="text-gray-500">Check-out</p>
									<p class="font-semibold">{invoice.checkOut}</p>
								</div>
							{/if}

							<div>
								<p class="text-gray-500">Payment</p>
								<p class="font-semibold">
									{invoice.paymentMethod}
								</p>
							</div>
						</div>

						<div class="border-t pt-4 space-y-2">
							<div class="flex justify-between text-sm">
								<span class="text-gray-500">Subtotal</span>
								<span class="font-semibold">
									{invoice.subtotal.toFixed(2)} SAR
								</span>
							</div>

							<div class="flex justify-between text-sm">
								<span class="text-gray-500">Tax (10%)</span>
								<span class="font-semibold">
									{invoice.tax.toFixed(2)} SAR
								</span>
							</div>

							<div class="flex justify-between text-lg font-bold pt-2 border-t">
								<span>Total</span>

								<span class="text-[#728156]">
									{invoice.total.toFixed(2)} SAR
								</span>
							</div>
						</div>

						<div class="mt-6 flex justify-end">
							<button
								onclick={() => cancelBooking(invoice.id)}
								class="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
							>
								Cancel Booking
							</button>
						</div>
<button
	onclick={() => printInvoice(invoice.id)}
	class="no-print w-full mt-3 flex items-center justify-center gap-2 rounded-lg border border-gray-300 hover:bg-gray-50 py-2 font-semibold transition"
>
	<FontAwesomeIcon icon={faPrint} />
	Print / Save as PDF
</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>