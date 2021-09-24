const mockFuncs = require('../src/mockFunctions');

jest.mock('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('3 - Verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui
  mockFuncs.add.mockImplementation((a, b) => a + b);
  mockFuncs.subtract.mockImplementation((a, b) => a - b);
  mockFuncs.multiply.mockImplementation((a, b) => a * b);
  mockFuncs.divide.mockImplementation((a, b) => a / b);
  mockFuncs.power.mockImplementation((a, b) => a ** b);
  mockFuncs.factorial.mockImplementation((a) => (a > 1 ? a * mockFuncs.factorial(a - 1) : 1));

  test('testa função add', () => {
    expect(mockFuncs.add(1, 2)).toEqual(3);
    expect(mockFuncs.add(8, 37)).toEqual(45);
    expect(mockFuncs.add(-11, 25)).toEqual(14);
    expect(mockFuncs.add(13, -188)).toEqual(-175);
    expect(mockFuncs.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(mockFuncs.subtract(899, 35)).toEqual(864);
    expect(mockFuncs.subtract(-17, 333)).toEqual(-350);
    expect(mockFuncs.subtract(45, 97)).toEqual(-52);
    expect(mockFuncs.subtract(23, -108)).toEqual(131);
    expect(mockFuncs.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(mockFuncs.multiply(1, 2)).toEqual(2);
    expect(mockFuncs.multiply(0, 5)).toEqual(0);
    expect(mockFuncs.multiply(-4, 9)).toEqual(-36);
    expect(mockFuncs.multiply(-12, -7)).toEqual(84);
    expect(mockFuncs.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(mockFuncs.divide(169, 13)).toEqual(13);
    expect(mockFuncs.divide(-1900, 5)).toEqual(-380);
    expect(mockFuncs.divide(42, 7)).toEqual(6);
    expect(mockFuncs.divide(729, 243)).toEqual(3);
    expect(mockFuncs.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(mockFuncs.power(10, 2)).toEqual(100);
    expect(mockFuncs.power(2, 10)).toEqual(1024);
    expect(mockFuncs.power(5, 5)).toEqual(3125);
    expect(mockFuncs.power(1, 10)).toEqual(1);
    expect(mockFuncs.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(mockFuncs.factorial(5)).toEqual(120);
    expect(mockFuncs.factorial(10)).toEqual(3628800);
    expect(mockFuncs.factorial(3)).toEqual(6);
    expect(mockFuncs.factorial(8)).toEqual(40320);
    expect(mockFuncs.factorial(2)).toEqual(2);
  });
});
