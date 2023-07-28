import mongoose from "mongoose";
import Overview from "./models/Overview"; //note: chatti
import Quote from "./models/Quote"; //note: chatti
import Logourl from "./models/Logourl";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

type MongooseType = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

let global = { mongoose: { conn: null, promise: null } }; // TS

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

// let cached = global.mongoose;
let cached: MongooseType = global.mongoose; // TS

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  // TS
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      Overview; //note: chatti
      Quote; //note: chatti
      Logourl;
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
