import Locations from "@/mongoose/locations/model";
import { FilterWishlistType, FilterLocationType } from "@/mongoose/locations/cutom";
import { LocationType } from "@/mongoose/locations/schema";
import { QueryOptions } from "mongoose";
import { serializeData } from "@/utils/serialize";

async function findLocations(
    filter: FilterLocationType | FilterWishlistType | {}
): Promise<LocationType[]> {
    try {
        let result: LocationType[] = await Locations.find(filter);
        return serializeData(result);
    } catch (err) {
        console.error("Error fetching locations:", err);
    }
    return []; //Évite les retours `undefined`
}

export async function findAllLocations(): Promise<LocationType[]> {
    return await findLocations({});
}

export async function findLocationsById(location_ids: string[]): Promise<LocationType[]> {
    return await findLocations({ location_id: { $in: location_ids } });
}

export async function onUserWishlist(user_id: string): Promise<LocationType[]> {
    return await findLocations({ on_wishlist: { $in: [user_id] } });
}

export async function updateWishlist(
    location_id: string,
    user_id: string,
    action: "add" | "remove"
): Promise<LocationType | null> {
    let update = action === "add" ? { $push: { on_wishlist: user_id } } : { $pull: { on_wishlist: user_id } };
    let options: QueryOptions = { upsert: true, returnDocument: "after" };

    try {
        let result = await Locations.findOneAndUpdate({ location_id }, update, options);
        return result ? serializeData(result) : null;
    } catch (err) {
        console.error("Error updating wishlist:", err);
   return null; //Évite les retours `{}` ou `undefined
    }
}
