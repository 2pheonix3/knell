import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { addGig, editGig, getGigData, getUserAuthGigs } from "../controllers/GigsControllers.js";
import { Router } from "express";

export const gigsRoutes=Router()
const upload = multer({ dest: "uploads/" });

gigsRoutes.post("/add", verifyToken, upload.array("images"), addGig);
gigsRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs);
gigsRoutes.get("/get-gig-data/:gigid", getGigData);
gigsRoutes.put("/edit-gig/:gigid", verifyToken,upload.array("images"),editGig);