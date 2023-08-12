import express from "express";
import {
  createTournament,
  deleteTournament,
  getAllTournaments,
  getTournamentById,
  updateTournament,
} from "../controllers/tournamentController.js";

const router = express.Router();
// Create a new tournament
router.post("/", createTournament);

// Get all tournaments
router.get("/", getAllTournaments);

// Get a single tournament by ID
router.get("/:id", getTournamentById);

// Update a tournament by ID
router.put("/:id", updateTournament);

// Delete a tournament by ID
router.delete("/:id", deleteTournament);

export default router;
