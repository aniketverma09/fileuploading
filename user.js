import mongoose from "mongoose";
// user model -
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String, //this will store the Cloudinary URL
  },
});

const User = mongoose.model("User", userSchema);

export default User;
