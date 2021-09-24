const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  it('atende', async () => {
    const data = await answerPhone(true);
    expect(data).toBe('Oi!');
  });

  test('ocupado', async () => {
    expect.assertions(1);
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error.message).toEqual('Infelizmente não podemos atender...');
    }
  });
});
