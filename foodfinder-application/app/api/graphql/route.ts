import dbConnect from "@/middleware/db-connect"; // ✅ Import depuis middleware/
import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest, NextResponse } from "next/server";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";
import { getToken } from "next-auth/jwt";

// ✅ Initialisation du serveur Apollo
const server = new ApolloServer<BaseContext>({
    resolvers,
    typeDefs,
});

// ✅ Création du handler GraphQL pour Next.js 13+
const handler = startServerAndCreateNextHandler(server, {
    context: async (req: NextRequest) => {
        await dbConnect(); // Connexion à la BDD

        const token = await getToken({ req }); // Récupération du token

        return { token }; // Ajout du token au contexte
    },
});

// ✅ Gestion de la requête POST (GraphQL)
export async function POST(req: NextRequest) {
    const response = await handler(req);
    response.headers.set('Access-Control-Allow-Origin', '*'); 
    response.headers.set('Access-Control-Allow-Methods', 'POST');
    response.headers.set('Access-Control-Allow-Headers', '*');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    return response;
}

// ✅ Gestion du CORS (OPTIONS pour les requêtes préflight)
export function OPTIONS() {
    return NextResponse.json(
        {}, 
        {
            status: 200,
            headers: {
                "Allow": "POST",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials": "true",
            },
        }
    );
}

