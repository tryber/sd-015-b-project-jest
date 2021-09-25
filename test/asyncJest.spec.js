const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    answerPhone(true).then((resolve) => expect((resolve).toBe('Oi')));
  });
  test('ocupado', () => {
    answerPhone(false).then((reject) => {
      expect(reject).toThrow(/Infelizmente não podemos atender.../);
    });
  });
});
