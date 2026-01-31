import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    transcript: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      default: "",
    },
    actionItems: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;
