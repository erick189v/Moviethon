const express = require("express");
const router = express.Router();

const moviesCtrl = require("../controllers/movies");

router.get("/", moviesCtrl.index);

router.post("/", moviesCtrl.create);

router.get("/:id", moviesCtrl.show);

router.delete("/:id", moviesCtrl.delete);

router.put("/:id", moviesCtrl.update);

module.exports = router;
