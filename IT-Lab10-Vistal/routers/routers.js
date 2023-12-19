const { Router } = require("express");

const router = new Router();
const firstName = "Vistal";
const lastName = "Shepel";

router.get("/", (req, res) => {
  res.status(200).json("Lab10");
});

router.get("/first-name", (req, res) => {
  res.status(200).json(firstName);
});

router.get("/last-name", (req, res) => {
  res.status(200).json(lastName);
});

module.exports = router;
