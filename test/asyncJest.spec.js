const assert = require('assert');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', (done) => {
    expect(answerPhone(true)).resolves.toBe('Oi!');
    done();
    // assert.fail();
    // Insira seu teste assíncrono aqui
  });
  test('ocupado', (done) => {
    expect(answerPhone(false)).rejects.toEqual(new Error('Infelizmente não podemos atender...'));
    done();
    // assert.fail();
    // Insira seu teste assíncrono aqui
  });
});
