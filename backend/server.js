import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();
const app = express();


////////// Middlewares //////////
app.use(express.json())
app.use(cors())
// app.use(express.urlencoded())



////////// Routing //////////
import generalRoutes from "./routes/general.routes.js";

app.use("/api", generalRoutes);





////////// Database ///////////
const PORT = process.env.BACKEND_PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`\n✅  MongoDB connected and Port running on ${PORT}  ✅\n`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
