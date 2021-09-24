// const assert = require('assert');
// const { resourceLimits } = require('worker_threads');
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
    answerPhone(true).then((resolve) => {
      expect(resolve).toEqual('Oi!');
    });
    // se a função executada na variavel for verdadeira (valor boleano) a resposta do resultado do teste deve ser igual ao resolve da promise.
  });
  test('ocupado', () => {
    /*  Certifique-se de retornar a promise - se você omitir esta instrução retorna, seu teste será concluído antes que a promessa retornada por fetchData resolva e then() tenha a chance de executar a callback.*/
    answerPhone(false).catch((error) => {
      expect(error.message).toMatch('Infelizmente não podemos atender...');
    });
  });
});
