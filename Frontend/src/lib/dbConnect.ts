import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};

async function Dbonnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Database is already connected");
        return;
    }

    if (!process.env.MONGO_DB_URI) {
        throw new Error("MONGO_DB_URI is not defined in environment variables");
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URI);
        connection.isConnected = 1;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error; 
    }
}

export default Dbonnect;
