import express from "express";
import {
  createMeeting,
  getAllMeetings,
  deleteMeeting,
} from "../controllers/meetingController.js";

const router = express.Router();

router.post("/", createMeeting);
router.get("/", getAllMeetings);
router.delete("/:id", deleteMeeting);

export default router;
