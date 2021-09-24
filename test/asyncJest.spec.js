const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    answerPhone(true).then((answer) => {
      expect(answer).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    answerPhone(false).catch((error) => {
      expect(error.messager).toMatch('Infelizmente não podemos atender...');
    });
  });
});
