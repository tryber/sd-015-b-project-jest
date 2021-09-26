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
  test('atende', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    // OPERADOR TERNÁRIO!
    const data = await answerPhone(true); // Armazena retorno da função em data
    expect(data).toBe('Oi!'); // Verifica se a mensagem de retorno é Oi!
  });

  test('ocupado', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    try {
      await answerPhone(false); // Executa o teste com a função sendo False
    } catch (error) { // Como ela retorna um erro
      // Verifica se o erro retorna uma mensagem de erro
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
