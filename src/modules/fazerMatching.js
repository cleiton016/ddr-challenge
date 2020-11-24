const Matching  = require('../app/models/matchings');
const Gravacao  = require('../app/models/gravacoes');
const Tabulacao = require('../app/models/tabulacoes');


async function matchindDeInformacoes() {
  const gravacoes = await Gravacao.find();
  const tabulacoes = await Tabulacao.find();

  for ( gravacao of gravacoes){
    for (tabulacao of tabulacoes){
      if(tabulacao.numeroBinado == gravacao.telefone ||
          tabulacao.numeroAcesso == gravacao.telefone){
          try {
            const matching = await Matching.create({
              gravacaoId: gravacao._id,
              tabulacaoId: tabulacao._id });
            await matching.save();
        } catch(e) {

        }
      }
    }
  }
}

module.exports = matchindDeInformacoes;