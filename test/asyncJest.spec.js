
const answerPhone = require('../src/asyncJest');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// referencia https://github.com/tryber/sd-015-b-project-jest/blob/marco-mecenas-jest-project/test/asyncJest.spec.js

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((response) =>
      expect(response).toEqual('Oi!'));
  });
  test('ocupado', () => answerPhone(false).catch((err) => expect(err)
    .toEqual(Error('Infelizmente não podemos atender...'))));
});
