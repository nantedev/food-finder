import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
    throw new Error("❌ Please define the MONGO_URI environment variable (.env.local)");
}

// ✅ Utilisation de globalThis pour éviter les problèmes avec Edge Runtime
let cached = (globalThis as any).mongoose;

if (!cached) {
    cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
    if (cached.conn) {
        console.log("✅ MongoDB already connected.");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("🔄 Connecting to MongoDB...");

        const opts: ConnectOptions = {
            bufferCommands: false,
            maxIdleTimeMS: 10000,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 20000,
        };

        mongoose.set("strictQuery", true); // ✅ Meilleure compatibilité

        cached.promise = mongoose
            .connect(MONGO_URI, opts)
            .then((mongooseInstance) => {
                console.log("✅ MongoDB connected successfully!");
                return mongooseInstance;
            })
            .catch((err) => {
                console.error("❌ MongoDB connection error:", err);
                return Promise.reject(err);
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
        throw new Error("Failed to connect to MongoDB.");
    }

    return cached.conn;
}

export default dbConnect;
