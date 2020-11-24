const express = require("express");
const Matching = require("../models/matchings");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const matching = await Matching.find();
    return res.send({ matching });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar Matching" });
  }
});

router.get("/:matchingId", async (req, res) => {
  try {
    const matching = await Matching.findById(req.params.matchingId);
    return res.send({ matching });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar Matching" });
  }
});


module.exports = app => app.use("/matching", router);
