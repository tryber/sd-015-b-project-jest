const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro booleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  it('atende', () => answerPhone(true).then((answer) => {
    expect(answer).toBe('Oi!');
  }));

  it('ocupado', () => {
    expect.assertions(1);
    return answerPhone(false).catch((error) => {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});
