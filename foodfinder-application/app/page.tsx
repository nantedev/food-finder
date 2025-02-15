import dbConnect from "@/middleware/db-connect";
import { findAllLocations } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";
import { LocationsList } from "@/app/components/locations-list/LocationsList";

// ✅ Utilisation de Metadata (Remplace <Head>)
export const metadata = {
  title: "The Food Finder - Home",
  description: "Find the best food places around!",
};

// ✅ Récupération des données directement dans le composant (Next.js 15)
const HomePage = async () => {
  await dbConnect(); // Connexion à la base de données
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
