const express = require("express");
const {getAllGuitars, getSingleGuitar} = require("../controllers/guitars.controllers");

const router = express.Router();

// router.route("/").get((req, res) => {
//   res.json("Hello from guitars route");
// });

// router.route("/:id").get((req, res) => {
//   const id = req.params.id;
//   res.json(`Trying to get guitar with id ${id}`);
// });

router.route("/").get(getAllGuitars);
router.route("/:id").get(getSingleGuitar);

module.exports = router;