import NextAuth, { NextAuthOptions, DefaultSession, DefaultUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { createHash } from "crypto";
import { JWT } from "next-auth/jwt";

//Définition d'un type personnalisé pour l'User ID
interface CustomUser extends DefaultUser {
    fdlst_private_userId?: string;
}

//Étendre le type du token JWT
interface CustomJWT {
    fdlst_private_userId?: string;
}

//Étendre le type de la session
declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT extends CustomJWT {}
}

//Fonction pour générer un User ID
const createUserId = (base: string): string => {
    return createHash("sha256").update(base).digest("hex");
};

//Configuration NextAuth avec typage
export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async jwt ({ token, user, account, profile, isNewUser }: { token: JWT, user?: DefaultUser, account?: any, profile?: any, isNewUser?: boolean }) {
            if (token?.email && !token.fdlst_private_userId) {
                token.fdlst_private_userId = createUserId(token.email);
            }
            return token;
        },
        async session({ session }: { session: DefaultSession }) {
            const user = session.user as CustomUser;
            if (user?.email && !user.fdlst_private_userId) {
                user.fdlst_private_userId = createUserId(user.email);
            }
            return session;
        },
    },
};

//Exportation des méthodes HTTP
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
