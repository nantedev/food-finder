import { NextResponse } from "next/server";
import dbConnect from "@/middleware/db-connect";
import {findAllLocations} from "mongoose/locations/services";


export async function GET() {
  try {
    console.log("🔄 Connexion à MongoDB en cours...");
    await dbConnect();
    console.log("✅ Connexion réussie !");
    
    const locations = await findAllLocations();
    console.log("📌 Locations trouvées :", locations);

    return NextResponse.json(locations, { status: 200 });
  } catch (error) {
    console.error("❌ Erreur API :", error); // 🔥 Affiche l'erreur exacte
    return NextResponse.json({ error: `Erreur de serveur: ${(error as Error).message}` }, { status: 500 });
  }
}
