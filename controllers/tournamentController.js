import Tournament from '../models/tournamentModel.js';
import Participant from '../models/participantModel.js';

// Controller for creating a new tournament
export const createTournament = async (req, res) => {
  try {
    const { name, startDate, endDate, participants, status } = req.body;

    // Verify if the provided participant IDs exist in the Participant collection
    const existingParticipants = await Participant.find({ _id: { $in: participants } });

    // Check if all provided participant IDs are valid
    if (existingParticipants.length !== participants.length) {
      return res.status(400).json({ message: 'Some participants are invalid' });
    }

    // Create the tournament with populated participants
    const tournament = new Tournament({
      name,
      startDate,
      endDate,
      participants: existingParticipants.map(p => p._id), // Store only the participant IDs
      status,
    });

    const savedTournament = await tournament.save();
    res.status(201).json(savedTournament);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for getting all tournaments
export const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting a single tournament by ID
export const getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id)
      .populate('participants', 'firstName lastName email') // Populate with specific fields from Participant
      .exec();

    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.json(tournament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for updating a tournament by ID
export const updateTournament = async (req, res) => {
  try {
    const { name, startDate, endDate, participants, status } = req.body;

    // Check if participants are provided and are an array
    if (!participants || !Array.isArray(participants)) {
      return res.status(400).json({ message: 'Invalid or missing participants array' });
    }

    // Verify if the provided participant IDs exist in the Participant collection
    const existingParticipants = await Participant.find({ _id: { $in: participants } });

    // Check if all provided participant IDs are valid
    if (existingParticipants.length !== participants.length) {
      return res.status(400).json({ message: 'Some participants are invalid' });
    }

    // Update the tournament with populated participants
    const updatedTournament = await Tournament.findByIdAndUpdate(
      req.params.id,
      {
        name,
        startDate,
        endDate,
        participants: existingParticipants.map(p => p._id), // Store only the participant IDs
        status,
      },
      { new: true }
    );

    if (!updatedTournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }

    res.json(updatedTournament);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Controller for deleting a tournament by ID
export const deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndDelete(req.params.id);

    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.json({ message: 'Tournament deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
