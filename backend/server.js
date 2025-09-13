import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import censusRoutes from "./routes/census.js";
import prisma from "./config/prismaClient.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api", censusRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


const shutdown = async () => {
  console.log("\n🛑 Shutting down server...");
  await prisma.$disconnect(); 
  server.close(() => {
    console.log("✅ Server closed, DB disconnected.");
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
