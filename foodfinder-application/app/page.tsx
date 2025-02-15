import { Metadata } from "next";
import dbConnect from "@/middleware/db-connect";
import { findAllLocations } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";
import { LocationsList } from "./components/locations-list/LocationsList";

// Metadata (Replaces <Head>)
export const metadata: Metadata = {
  title: "The Food Finder - Home",
  description: "The Food Finder - Home",
};

const HomePage = async () => {
  await dbConnect();
  let locations: LocationType[] = [];

  try {
    locations = await findAllLocations();
  } catch (error) {
    console.error("Failed to fetch locations:", error);
  }

  return (
    <div>
      <h1>Welcome to the Food Finder!</h1>
      <LocationsList locations={locations} />
    </div>
  );
};

export default HomePage;
