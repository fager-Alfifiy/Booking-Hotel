<!-- <script>
	import { booking } from "$lib/stores/booking";

	let fullName = "";
	let email = "";
	let phone = "";

	function saveGuestInfo() {
		booking.update((current) => ({
			...current,
			guest: {
				fullName,
				email,
				phone
			}
		}));
	}
</script>

<div class="bg-white rounded-xl shadow p-6">

	<h2 class="text-2xl font-bold mb-4">
		Guest Information
	</h2>

	<input
		class="border rounded-lg w-full p-3 mb-4"
		placeholder="Full Name"
		bind:value={fullName}
		oninput={saveGuestInfo}
	/>

	<input
		class="border rounded-lg w-full p-3 mb-4"
		type="email"
		placeholder="Email"
		bind:value={email}
		oninput={saveGuestInfo}
	/>

	<input
		class="border rounded-lg w-full p-3"
		placeholder="Phone Number"
		bind:value={phone}
		oninput={saveGuestInfo}
	/>

</div> -->