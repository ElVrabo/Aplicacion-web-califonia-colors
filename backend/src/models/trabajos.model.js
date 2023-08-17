import mongoose from "mongoose";

const trabajosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Trabajo", trabajosSchema);
