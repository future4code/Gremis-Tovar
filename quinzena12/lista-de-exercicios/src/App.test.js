import {
  pegaAntecessor,
  calculaIdadeEmDias,
  ehMaiorQue10,
  calculaPrecoMacas,
  podeVotar,
  ehTriangulo,
  verificaAposentadoria,
} from "./App";

test("Verifica se pegaAntecessor retorna o número antecessor", () => {
  expect(pegaAntecessor(1)).toBe(0);
  expect(pegaAntecessor(2)).toBe(1);
  expect(pegaAntecessor(0)).toBe(-1);
  expect(pegaAntecessor(100)).toBe(99);
  expect(pegaAntecessor(-100)).toBe(-101);
  expect(pegaAntecessor(5)).toBe(4);
});

test("Verifica se calculaIdadeEmDias calcula idade corretamente", () => {
  expect(calculaIdadeEmDias(1, 0, 0)).toBe(1);
  expect(calculaIdadeEmDias(0, 1, 0)).toBe(30);
  expect(calculaIdadeEmDias(0, 0, 1)).toBe(365);
  expect(calculaIdadeEmDias(0, 0, 0)).toBe(0);
  expect(calculaIdadeEmDias(1, 1, 1)).toBe(396);
  expect(calculaIdadeEmDias(29, 5, 8)).toBe(3099);
});

test("calculaPrecoMacas", () => {
  expect(calculaPrecoMacas(1)).toBe(1.3);
  expect(calculaPrecoMacas(2)).toBe(2.6);
  expect(calculaPrecoMacas(10)).toBe(13);
  expect(calculaPrecoMacas(11)).toBe(14.3);
  expect(calculaPrecoMacas(12)).toBe(12);
  expect(calculaPrecoMacas(12345)).toBe(12345);
});

test("Testa ehMaiorQue10", () => {
  expect(ehMaiorQue10(1)).toBe(false);
  expect(ehMaiorQue10(9)).toBe(false);
  expect(ehMaiorQue10(10)).toBe(false);
  expect(ehMaiorQue10(11)).toBe(true);
  expect(ehMaiorQue10(999)).toBe(true);
});

test("podeVotar", () => {
  expect(podeVotar(0, 16)).toBe(true);
  expect(podeVotar(0, 15)).toBe(false);
  expect(podeVotar(2000, 2020)).toBe(true);
  expect(podeVotar(2004, 2020)).toBe(true);
  expect(podeVotar(2005, 2020)).toBe(false);
});

test("ehTriangulo", () => {
  expect(ehTriangulo(0, 0, 0)).toBe(false);
  expect(ehTriangulo(1, 1, 1)).toBe(true);
  expect(ehTriangulo(3, 4, 5)).toBe(true);
  expect(ehTriangulo(10, 11, 12)).toBe(true);
});

test("verificaAposentadoria", () => {
  expect(verificaAposentadoria(1950, 1960)).toBe(true);
  expect(verificaAposentadoria(1980, 1990)).toBe(true);
  expect(verificaAposentadoria(1950, 1960)).toBe(true);
  expect(verificaAposentadoria(1950, 1960)).toBe(true);
});
