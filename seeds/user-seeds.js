const { User } = require("../models");

const userData = [
  {
    //1
    name: "Tom",
    email: "tommy@example.com",
    password: "W0rdpass",
  },
  {
    //2
    name: "Eve",
    email: "eve4eva@example.com",
    password: "Pa55word",
  },
  {
    //3
    name: "James T.",
    email: "cptkirk@starfleet.com",
    password: "w0sspard",
  },
  {
    //4
    name: "Duce A.",
    email: "i<3achiovies@guppies.com",
    password: "55apdrow",
  },
  {
    //5
    name: "Remillia S.",
    email: "scarletpopo@kouma.com",
    password: "pardwo55",
  },
];
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;
