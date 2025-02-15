import mongoose from "mongoose";
import { LocationSchema, LocationType } from "@/mongoose/locations/schema";

// ✅ Vérification pour éviter les modèles dupliqués
const LocationModel = mongoose.models.Locations || mongoose.model<LocationType>("Locations", LocationSchema);

export default LocationModel;
