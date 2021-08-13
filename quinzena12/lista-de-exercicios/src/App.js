export const pegaAntecessor = (num) => {
  return num - 1;
};

export const calculaIdadeEmDias = (dias, meses, anos) => {
  return 365 * anos + 30 * meses + dias;
};

export const ehMaiorQue10 = (num) => {
  return num > 10;
};

export const calculaPrecoMacas = (numMacas) => {
  if (numMacas < 12) {
    return numMacas * 1.3;
  }

  return numMacas;
};

export const podeVotar = (anoNascimento, anoAtual) => {
  const idade = anoAtual - anoNascimento;
  return idade >= 16;
};

export const ehTriangulo = (a, b, c) => {
  if (a < b + c) {
    if (b < a + c) {
      if (c < a + b) {
        return true;
      }
    }
  }
  return false;
};

export const verificaAposentadoria = (anoNascimento, anoIngresso) => {
  const idade = 2021 - anoNascimento
  const tempoContribuicao = 2021 - anoIngresso
  return idade >= 65 || tempoContribuicao >= 30 || (idade > 60 && tempoContribuicao > 25)
}