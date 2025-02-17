import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import dbConnect from "@/middleware/db-connect";
import { onUserWishlist } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";
import WishlistPage from "@/app/components/WishlistPage";

interface Props {
    params: { userId: string };
}

// Composant Server-side
const List = async ({ params }: Props) => {
    //Vérification que params.userId existe
    const { userId } = await Promise.resolve(params);
    if (!userId) {
        return notFound(); // 🔴 Retourne une page 404 si l'userId est absent
    }

    const session = await getServerSession(authOptions);

    //Connexion à la base de données
    await dbConnect();
    const locations: LocationType[] = await onUserWishlist(userId);

    //Vérifie si l'utilisateur connecté est le propriétaire de la liste
    const isCurrentUsers = session?.user?.fdlst_private_userId === userId;

    //Si aucune liste trouvée, on affiche une page 404
    if (!locations || locations.length === 0) return notFound();

    //On passe les données au composant client
    return <WishlistPage locations={locations} isCurrentUsers={isCurrentUsers} />;
};

export default List;