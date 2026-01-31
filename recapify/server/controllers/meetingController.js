import Meeting from "../models/Meeting.js";
import { summarizeTranscript } from "../services/aiService.js";

export const createMeeting = async (req, res) => {
  try {
    const { title, transcript } = req.body;

    if (!title || !transcript) {
      return res.status(400).json({
        success: false,
        message: "Title and transcript are required",
      });
    }

    // 🔥 AI LOGIC (THIS WAS MISSING / NOT RUNNING)
    const { summary, actionItems } = await summarizeTranscript(transcript);

    const meeting = await Meeting.create({
      title,
      transcript,
      summary,
      actionItems,
    });

    res.status(201).json({
      success: true,
      data: meeting,
    });
  } catch (error) {
    console.error("CREATE MEETING ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: meetings.length,
      data: meetings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }

    await meeting.deleteOne();

    res.status(200).json({
      success: true,
      message: "Meeting deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
