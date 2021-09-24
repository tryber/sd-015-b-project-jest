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
  test('atende', () =>
    expect(answerPhone(true))
      .resolves
      .toEqual('Oi!'));

  // test('atende', () => (
  //   answerPhone(true)
  //     .then((answer) => {
  //       expect(answer)
  //       .toEqual('Oi!');
  //     })
  // ));

  test('ocupado', () => {
    expect(answerPhone(false))
      .rejects
      .toEqual(new Error('Infelizmente não podemos atender...'));
  });

  // test('ocupado', () => {
  //   expect.assertions(1);
  //   return answerPhone(false)
  //     .catch((error) => (
  //     expect(error.message)
  //       .toMatch('Infelizmente não podemos atender...')
  //     ));
  // });
});
