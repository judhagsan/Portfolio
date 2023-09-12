const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 devia retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("subtrair 2 - 2 devia retornar 0", () => {
  const resultado = calculadora.subtrair(2, 2);
  expect(resultado).toBe(0);
});

test("multiplicar 2 * 2 devia retornar 4", () => {
  const resultado = calculadora.multiplicar(2, 2);
  expect(resultado).toBe(4);
});

test("dividir 2 / 2 devia retornar 1", () => {
  const resultado = calculadora.dividir(2, 2);
  expect(resultado).toBe(1);
});
