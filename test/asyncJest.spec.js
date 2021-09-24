const answerPhone = require('../src/asyncJest');
// jest.mock('../src/asyncJest')
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  // answerPhone = jest.fn()
  test('atende', async () => {
    // answerPhone.mockResolvedValue('Oi!')
    await expect(answerPhone(true)).resolves.toBe('Oi!')
    // Insira seu teste assíncrono aqui
  });
  test('ocupado', async () => {
    // answerPhone.mockRejectedValue(new Error('Infelizmente não podemos atender...'))
    await expect(answerPhone(false)).rejects
      .toThrow(new Error('Infelizmente não podemos atender...'))
    // Insira seu teste assíncrono aqui
  });
});
