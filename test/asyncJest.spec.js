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
  test('atende', async () => {
    // Insira seu teste assíncrono aqui
    const resolve = await answerPhone(true);
    expect(resolve).toBe('Oi!');
  });
  test('ocupado', () => {
    // Insira seu teste assíncrono aqui
    const verifyError = answerPhone().catch((error) => {
      const msg = error === 'Infelizmente não podemos atender...';
      return msg;
    });
    expect(verifyError).toBeTruthy();
  });
});
