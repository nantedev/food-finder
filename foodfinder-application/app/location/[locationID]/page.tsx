import { notFound } from "next/navigation";
import { Metadata } from "next";
import dbConnect from "@/middleware/db-connect";
import { findLocationsById } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";
import { LocationDetail } from "@/app/components/location-details/LocationDetail";

type Props = {
    params: { locationID: string }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const locationID = await Promise.resolve(params.locationID);
    
    await dbConnect();
    const locations = await findLocationsById([locationID]);

    if (!locations.length) {
        return {
            title: "Location Not Found",
            description: "This location does not exist.",
        };
    }

    const location = locations[0];
    return {
        title: `The Food Finder - Details for ${location.name}`,
        description: `The Food Finder - Details for ${location.name}`,
    };
}

export default async function LocationPage({ params }: Props) {
    const locationID = await Promise.resolve(params.locationID);
    
    await dbConnect();
    const locations = await findLocationsById([locationID]);

    if (!locations.length) {
        notFound();
    }

    const location: LocationType = locations[0];

    return (
        <div>
            <h1>{location.name}</h1>
            <LocationDetail location={location} />
        </div>
    );
}