const mongoose = require("../../database");

const MatchingsSchema = new mongoose.Schema({
  gravacaoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gravacoes',
    require: true,
    unique: true
  },
  tabulacaoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tabulacoes",
    require: true,
    unique: true
  }
});


const Matchings = mongoose.model("Matchings", MatchingsSchema);

module.exports = Matchings;
