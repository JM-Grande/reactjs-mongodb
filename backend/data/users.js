import bcrypt from "bcryptjs";

const users = [
  {
    name: "Marco Yap",
    email: "marcoyap@email.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Ella Mae",
    email: "ellamae@email.com",
    password: bcrypt.hashSync("ellamae", 10),
  },
  {
    name: "Julie Kim",
    email: "juliekim@email.com",
    password: bcrypt.hashSync("juliekim", 10),
  },
  {
    name: "Richard Type",
    email: "richardtype@email.com",
    password: bcrypt.hashSync("richardtype", 10),
  },
  {
    name: "Manager",
    email: "Manager@email.com",
    password: bcrypt.hashSync("manager", 10),
  },
];

export default users;
