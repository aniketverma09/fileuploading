import cloudinary from "../utils/cloudinaryConfig.js";
import fs from "fs";

export const handlefileuploding = async (req, res) => {
  try {
    const data = req.file;
    console.log(data);

    const url = await cloudinary.uploader.upload(data.path);
    console.log(url);

    fs.unlink(data.path, (err) => {
      if (err) {
        console.log("delete file", err);
        return;
      } else {
        console.log("file delete from project");
      }
    });

    res.send("file uploded");
  } catch (error) {
    console.log(error);
  }
};
