import express, { response } from "express";

const server = express();

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

server.get("/holidays", (request, response) => {
  response.send(holidays);
});

server.get("/is-today-holiday", (request, response) => {
  const hoje = new Date();
  let mensagem = `Não, hoje não é feriado`;

  let holiday = holidays.find(
    (value) => value.date === hoje.toLocaleDateString("en-us")
  );
  if (holiday) {
    mensagem = `Sim, hoje é ${holiday.name}`;
  }
 // console.log(request)
  response.send(mensagem);
});

server.get("/holidays/:mes", (require, response) =>{
    const { mes } = require.params; //require.params.mes
    const holidaysMonth = holidays.filter(value => value.date.split("/")[0] === mes);
    response.send(holidaysMonth)
 })

console.log(holidays);
server.listen(4000, function () {
  console.log(`Listen on 4000`);
});
