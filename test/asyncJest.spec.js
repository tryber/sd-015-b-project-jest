const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', (done) => {
    expect(answerPhone(true)).resolves.toBe('Oi!');
    done();
  });

  test('ocupado', (done) => {
    expect(answerPhone(false)).rejects.toEqual(new Error('Infelizmente não podemos atender...'));
    done();
  });
});
