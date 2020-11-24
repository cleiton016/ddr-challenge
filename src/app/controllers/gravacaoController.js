const express = require('express');
const Gravacao = require('../models/gravacoes')
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const gravacao = await Gravacao.find();
    return res.send({ gravacao });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar gravções" });
  }
});

router.get("/:gravacaoId", async (req, res) => {
  try {
    const gravacao = await Gravacao.findById(req.params.gravacaoId);
    return res.send({ gravacao });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar gravação" });
  }
});

router.post("/", async (req, res) => {
    try {
      const {telefone, ramal, dataGravacao} = req.body;
      const gravacao = await Gravacao.create({ telefone, ramal, dataGravacao });
      await gravacao.save();
      return res.send({ gravacao });
    } catch (err) {      
      return res.status(400).send({ error: "Erro ao criar nova gravação" });
    }
  });

module.exports = app => app.use("/gravacao", router);