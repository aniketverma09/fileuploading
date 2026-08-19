import cloudinary from "../utils/cloudinaryConfig.js";
import fs from "fs";
import User from "../user.js";

export const handlefileuploding = async (req, res) => {
  try {
    const data = req.files;
    if (!data) return res.status(400).json({ msg: "no file uplode" });
    console.log(req.files);

    const uploadPromises = data.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path);
      fs.unlinkSync(file.path); //deleat local file after upload
      return result.secure_url;
    });
    console.log(data);

    const upload_Url = await Promise.all(uploadPromises);

    const newUser = await User.create({
      name:req.body.name,
      email:req.body.email,
      profileImage:upload_Url[0]
    });

    res.status(200).json({
      message:'File uploaded successfully', //mag to postman
      url: "cloudinary_url"

    });
  } catch (err) {
    console.error("file upload fail:", err);
    res.status(500).json({});
  }
};
