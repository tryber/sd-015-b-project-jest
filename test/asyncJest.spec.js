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
    const call = answerPhone(true);
    await expect(call).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    const call = answerPhone(false);
    const erro = ('Infelizmente não podemos atender...');
    await expect(call).rejects.toEqual(new Error(erro));
  });
});
