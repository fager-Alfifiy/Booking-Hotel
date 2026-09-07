import { writable } from "svelte/store";

function createBookingStore() {

	const { subscribe, set, update } = writable({
		items: [],
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
		addItem: (hotel, room) =>
			update((current) => {
				// avoid adding the exact same room twice
				const alreadyIn = current.items.some((i) => i.room.id === room.id);
				if (alreadyIn) return current;

				return {
					...current,
					items: [...current.items, { id: Date.now() + Math.random(), hotel, room }]
				};
			}),
		removeItem: (itemId) =>
			update((current) => ({
				...current,
				items: current.items.filter((i) => i.id !== itemId)
			})),
		clearCart: () =>
			update((current) => ({
				...current,
				items: []
			}))
	};
}
export const booking = createBookingStore();