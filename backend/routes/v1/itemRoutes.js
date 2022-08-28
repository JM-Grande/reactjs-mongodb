import express from "express";
import asyncHandler from "express-async-handler";
import Item from "../../models/itemModel.js";

const ROUTER = express.Router();

ROUTER.get(
  "/",
  asyncHandler(async (request, response) => {
    const ITEMS = await Item.find({});
    response.json(ITEMS);
  })
);

ROUTER.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const ITEM = await Item.findById(request.params.id);

    if (ITEM) {
      response.json(ITEM);
    } else {
      response.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default ROUTER;
