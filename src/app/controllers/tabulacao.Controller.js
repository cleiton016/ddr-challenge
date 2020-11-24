const express = require('express');
const Tabulacoes = require('../models/tabulacoes')
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tabulacao = await Tabulacoes.find();
    return res.send({ tabulacao });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar tabaulações" });
  }
});

router.get("/:tabulacaoId", async (req, res) => {
  try {
    const tabulacao = await Tabulacoes.findById(req.params.tabulacaoId);
    return res.send({ tabulacao });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar tabaulação" });
  }
});

router.post("/", async (req, res) => {
    try {
      const {nomeCliente, protocolo, dataAtendimento, numeroBinado, numeroAcesso} = req.body;
      const tabulacao = await Tabulacoes.create({
        nomeCliente,
        protocolo,
        dataAtendimento,
        numeroBinado,
        numeroAcesso
      });
      await tabulacao.save();
  
      return res.send({ tabulacao });
    } catch (err) {      
      return res.status(400).send({ error: "error creating new tabulacao" });
    }
  });

module.exports = app => app.use("/tabulacao", router);