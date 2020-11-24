const mongoose = require("../../database");

const TabulacoesSchema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    require: true
  },
  protocolo: {
    type: String,
    require: true
  },
  dataAtendimento: {
    type: Date,
    require: true
  },
  numeroBinado: {
    type: Number,
    require: true
  },
  numeroAcesso: {
    type: Number,
    require: true
  }
});

const Tabulacoes = mongoose.model("Tabulacoes", TabulacoesSchema);

module.exports = Tabulacoes;
