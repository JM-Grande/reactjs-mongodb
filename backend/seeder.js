import dotenv from "dotenv";
import connectDB from "./config/db.js";
// seeds
import users from "./data/users.js";
import items from "./data/items.js";
import orders from "./data/orders.js";
// models
import User from "./models/userModel.js";
import Item from "./models/itemModel.js";
import Order from "./models/orderModel.js";

dotenv.config();

connectDB();

const dataSeeder = async () => {
  try {
    // clear DB before import
    await User.deleteMany();
    await Item.deleteMany();
    await Order.deleteMany();

    //import
    const USERS = await User.insertMany(users);

    const ADMIN = USERS[0]._id;
    const ITEMS = items.map((item) => {
      return {
        ...item,
        user: ADMIN,
      };
    });
    await Item.insertMany(ITEMS);

    const ORDER = ITEMS[0].user;
    const ORDERS = orders.map((order) => {
      return {
        ...order,
        user: ADMIN,
        item: ORDER,
      };
    });
    await Order.insertMany(ORDERS);

    console.log("Database Seeded");
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const dataCleaner = async () => {
  try {
    //clear DB before import
    await User.deleteMany();
    await Item.deleteMany();
    await Order.deleteMany();

    console.log("Database Cleaned");
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  dataCleaner();
} else {
  dataSeeder();
}
