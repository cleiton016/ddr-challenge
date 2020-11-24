const mongoose = require("../../database");

const GravacoesSchema = new mongoose.Schema({
  telefone: {
    type: Number,
    require: true
  },
  ramal: {
    type: Number,
    require: true
  },
  dataGravacao: {
    type: Date,
    require: true
  }
});

const Gravacoes = mongoose.model("Gravacoes", GravacoesSchema);

module.exports = Gravacoes;
