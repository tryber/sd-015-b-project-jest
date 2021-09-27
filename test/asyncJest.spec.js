const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    // Insira seu teste assíncrono aqui
    answerPhone(true).then((answer) => {
      expect(answer).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    // Insira seu teste assíncrono aqui
    answerPhone(false).catch((error) => {
      expect(error.message).toBe('Infelizmente não podemos atender...');
    });
  });
});
