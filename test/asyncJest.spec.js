// const assert = require('assert');
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
    // assert.fail();
    answerPhone(true).then((data) => {
      expect(data).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    // assert.fail();
    answerPhone(false).catch((data) => {
      expect(data).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});
