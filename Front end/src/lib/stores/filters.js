import { writable } from "svelte/store";

export const filters = writable({
	search: "",
	maxPrice: 5000,
	Starrating: 0,
	checkIn: "",
	checkOut: ""
});