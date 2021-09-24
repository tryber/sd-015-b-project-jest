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
    // na primeira linha precisamos passar a função do teste para assincrona, já que ela vai testar uma promise assim utilizamos async.
    await answerPhone(true).then((resolve) => {
      // utilizamos o await para que espere essa função terminar, como a answerPhone() gera uma promise, e esperamos que seja resolvida pois usamos true como parametro, utilizamos  o  .then(e usando o valor gerado na promise como parametro),
      expect(resolve).toEqual('Oi!');
      // /jogamos em um expect, que diz que se esse resolve capturado pelo then, tem de ser estritamento igual á 'Oi!'
    });
  });

  test('ocupado', async () => {
    await answerPhone(false).catch((reject) => {
      expect(reject).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});
