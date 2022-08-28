import express from "express";
import asyncHandler from "express-async-handler";
import Order from "../../models/orderModel.js";

const ROUTER = express.Router();

ROUTER.get(
  "/",
  asyncHandler(async (request, response) => {
    const ORDERS = await Order.find({});
    response.json(ORDERS);
  })
);

ROUTER.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const ORDER = await Order.findById(request.params.id);

    if (ORDER) {
      response.json(ORDER);
    } else {
      response.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default ROUTER;
