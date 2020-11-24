const express    = require("express");
const bodyParser = require("body-parser");
const cron       = require('node-cron');
const matching   = require('./modules/fazerMatching');

const port = process.env.PORT || 3000;
const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

cron.schedule('*/5 * * * * *', () => {
  matching();
});

require("./app/controllers/index")(app);

app.get("/", (req, res) => {
  res.send({
    API: "Desafio back-end: matching de informações",
  });
});

app.use((error, req, res, next) => {
  console.Console(error.status)
  res.status(error.status || 500);
  return res.send({
    erro: {mensagem: "Opps algo deu errado!"}
  })
});

app.use((req, res, next) => {
  const erro = new Error('Rota não encontrada');
  res.status(404)
  next(erro);
});



app.listen(port, () =>{
  console.log(`servidor rodando no endereço: http://localhost:${port}/`);
});
