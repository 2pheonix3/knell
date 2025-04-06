import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/AuthRoutes.js";
import { gigsRoutes } from "./routes/GigsRoutes.js";
import { orderRoutes } from "./routes/OrderRoutes.js";

dotenv.config();

const app = express() ;
const port = process.env.PORT 
app.use(
  cors({
    origin: [process.env.PUBLIC_URL], // Use the actual value from .env
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/uploads", express.static("uploads"));
app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigsRoutes);
app.use("/api/orders", orderRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
