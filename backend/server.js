import express from "express";
import dotenv from "dotenv";
//MongoDB server connection
import connectDB from "./config/db.js";

//routes
import itemRoutes from "./routes/v1/itemRoutes.js";
import orderRoutes from "./routes/v1/orderRoutes.js";

//middleware
import { notFound, serverError } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const APP = express();
const PORT = process.env.PORT || 8000;

APP.get("/", (request, response) => {
  response.send("Authorized");
});

APP.use("/api/v1/items", itemRoutes);
APP.use("/api/v1/orders", orderRoutes);

//error handlers
APP.use(notFound);
APP.use(serverError);


APP.listen(PORT, console.log(`Server is running at port ${PORT}`));
