import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

//router import
import participantRoutes from "./routes/participantRoutes.js";
import tournamentRoutes from "./routes/tournamentRoutes.js";

//mongodb connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.🎉🎉");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/participants", participantRoutes);

// Port
const PORT = process.env.PORT || 8080;
//listen
app.get("/", (req, res) => {
  res.send("Tournament System API");
});

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
