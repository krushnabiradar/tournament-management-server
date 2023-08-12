import express from "express";
import {
  createParticipant,
  deleteParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
} from "../controllers/participantController.js";

const router = express.Router();

// Create a new participant
router.post("/", createParticipant);

// Get all participants
router.get("/", getAllParticipants);

// Get a single participant by ID
router.get("/:id", getParticipantById);

// Update a participant by ID
router.put("/:id", updateParticipant);

// Delete a participant by ID
router.delete("/:id", deleteParticipant);
export default router;
