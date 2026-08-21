import { writable } from "svelte/store";

function createBookingStore() {
	const { subscribe, set, update } = writable({
		hotel: null,
		room: null,
		guests: 1,
		checkIn: "",
		checkOut: "",
		paymentMethod: "",
		total: 0
	});

	return {
		subscribe,
		set,
		update,
		remove: () =>
			update((current) => ({
				...current,
				hotel: null,
				room: null
			}))
	};
}

export const booking = createBookingStore();