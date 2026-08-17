import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const result = await mongoose.connect(
      "mongodb://aniket15:aniketverma9988@ac-f9wsut8-shard-00-00.dltkchu.mongodb.net:27017,ac-f9wsut8-shard-00-01.dltkchu.mongodb.net:27017,ac-f9wsut8-shard-00-02.dltkchu.mongodb.net:27017/fileuploding?ssl=true&replicaSet=atlas-12j3u3-shard-0&authSource=admin&appName=Cluster0",
    );
    console.log("database connect");
  } catch (error) {
    console.log(error);
  }
};
