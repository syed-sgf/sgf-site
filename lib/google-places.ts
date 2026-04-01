const PLACE_ID = "ChIJWaU0P0kfTIYR7gk3huNTke4";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

export interface PlaceData {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export async function getGoogleReviews(): Promise<PlaceData | null> {
  if (!API_KEY) {
    console.warn("GOOGLE_PLACES_API_KEY not set");
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_sort=most_relevant&key=${API_KEY}`;
    const res = await fetch(url, {
      next: { revalidate: 86400 }, // cache 24 hours
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== "OK") {
      console.error("Places API error:", data.status);
      return null;
    }

    return data.result as PlaceData;
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return null;
  }
}
