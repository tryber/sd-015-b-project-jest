const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', async () => {
    // const checkPhoneAnswer = await answerPhone(true);
    // expect(checkPhoneAnswer).toBe('Oi!');
    answerPhone(true).then((answer) => {
      expect(answer).toBe('Oi!');
    });
  });
  test('ocupado', async () => {
    // try {
    //   await answerPhone(false);
    // } catch (error) {
    //   expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    // }
    answerPhone(false).catch((error) => {
      expect(error.messager).toMatch('Infelizmente não podemos atender...');
    });
  });
});
