import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("=> no mongodb url provided");
  }

  if (isConnected) {
    return console.log("=> using existing database connection");
  }

  try {
    mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    isConnected = true;
    console.log("=> using new database connection");
  } catch (error) {
    console.log("=> error connecting to database: ", error);
  }
}
