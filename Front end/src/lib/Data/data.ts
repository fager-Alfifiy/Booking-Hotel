export type Hotel = { id: number | string; name: string; city?: string; price?: number; [k: string]: any };
export type Room  = { id: number | string; hotelId: number | string; available?: boolean; [k: string]: any };

type Dataset = { hotels: Hotel[]; rooms: Room[] };
let cache: Promise<Dataset> | null = null;

export function loadData(): Promise<Dataset> {
  cache ??= fetch('/data/hotels.json')
    .then((r) => {
      if (!r.ok) throw new Error(`تعذّر تحميل البيانات (HTTP ${r.status})`);
      return r.json();
    })
    .catch((e) => {
      cache = null; // يسمح بإعادة المحاولة
      throw e;
    });
  return cache;
}

export type HotelQuery = { page?: number; limit?: number; q?: string; city?: string; maxPrice?: number };

export async function getHotelsPage({ page = 1, limit = 6, q = '', city = '', maxPrice }: HotelQuery) {
  const { hotels } = await loadData();
  const term = q.trim().toLowerCase();

  const filtered = hotels.filter((h) => {
    if (term && !JSON.stringify(h).toLowerCase().includes(term)) return false;
    if (city && h.city !== city) return false;
    if (maxPrice != null && (h.price ?? 0) > maxPrice) return false;
    return true;
  });

  const total = filtered.length;                       // كان X-Total-Count
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const items = filtered.slice((safePage - 1) * limit, safePage * limit);

  return { items, total, totalPages, page: safePage };
}

export async function getHotel(id: string | number) {
  const { hotels } = await loadData();
  return hotels.find((h) => String(h.id) === String(id)) ?? null; // null = غير موجود (كان 404)
}

export async function getRoomsByHotel(hotelId: string | number) {
  const { rooms } = await loadData();
  return rooms.filter((r) => String(r.hotelId) === String(hotelId));
}