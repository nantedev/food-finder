import mongoose from "mongoose";
import { DefaultSession, DefaultUser } from "next-auth";

declare global {
    var mongoose: mongoose;
}

declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        fdlst_private_userId: string;
    }
}