import Participant from "../models/participantModel.js";

// Controller for creating a new participant
export const createParticipant = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      age,
      address: { street, city, state, zip, country },
    } = req.body;

    const participant = new Participant({
      firstName,
      lastName,
      email,
      age,
      address: {
        street,
        city,
        state,
        zip,
        country,
      },
    });

    const savedParticipant = await participant.save();
    res.status(201).json(savedParticipant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for getting all participants
export const getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting a single participant by ID
export const getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for updating a participant by ID
export const updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller for deleting a participant by ID
export const deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }
    res.json({ message: "Participant deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
