
<script>
	import { booking } from "$lib/stores/booking";

	let payment = "Visa";

	function updatePayment(value) {
		payment = value;

		booking.update((current) => ({
			...current,
			payment
		}));
	}
</script>

<div class="bg-white rounded-xl shadow p-6">

	<h2 class="text-2xl font-bold mb-4">
		Payment Method
	</h2>

	<label class="flex items-center gap-3 mb-3 cursor-pointer">
		<input
			type="radio"
			name="payment"
			value="Visa"
			checked={payment === "Visa"}
			onchange={() => updatePayment("Visa")}
			class="w-5 h-5"
		/>
		<span>Visa</span>
	</label>

	<label class="flex items-center gap-3 mb-3 cursor-pointer">
		<input
			type="radio"
			name="payment"
			value="Mastercard"
			checked={payment === "Mastercard"}
			onchange={() => updatePayment("Mastercard")}
			class="w-5 h-5"
		/>
		<span>Mastercard</span>
	</label>

	<label class="flex items-center gap-3 mb-3 cursor-pointer">
		<input
			type="radio"
			name="payment"
			value="Mada"
			checked={payment === "Mada"}
			onchange={() => updatePayment("Mada")}
			class="w-5 h-5"
		/>
		<span>Mada</span>
	</label>

	<label class="flex items-center gap-3 cursor-pointer">
		<input
			type="radio"
			name="payment"
			value="Apple Pay"
			checked={payment === "Apple Pay"}
			onchange={() => updatePayment("Apple Pay")}
			class="w-5 h-5"
		/>
		<span>Apple Pay</span>
	</label>

</div>