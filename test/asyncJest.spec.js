const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => {
    const actual = await answerPhone(true);
    const expected = 'Oi!';
    expect(actual).toBe(expected);
  });
  test('ocupado', () => {
    const expectedError = 'Infelizmente não podemos atender...';
    const actual = answerPhone(false).catch((err) => err === expectedError);
    expect(actual).toBeTruthy();
  });
});
