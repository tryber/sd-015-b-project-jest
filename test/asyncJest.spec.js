const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    answerPhone(true).then((answer) => {
      expect(answer).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    expect.assertions(1);
    return answerPhone(false).catch((error) => (
      expect(error.message).toMatch('Infelizmente não podemos atender...')
    ));
  });
});
