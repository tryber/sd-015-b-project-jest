const mockFunctions = require('../src/mockFunctions');

jest.mock('../src/mockFunctions/');

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

  test('testa função add', () => {
    mockFunctions.add = jest.fn().mockImplementation((a, b) => a + b);
    mockFunctions.add(1, 2);
    mockFunctions.add(8, 37);
    mockFunctions.add(-11, 25);
    mockFunctions.add(13, -188);
    mockFunctions.add(7, 26);

    expect(mockFunctions.add).toHaveBeenCalled();
    expect(mockFunctions.add).toHaveBeenCalledTimes(5);
    expect(mockFunctions.add).toHaveBeenCalledWith(1, 2);
    expect(mockFunctions.add).toHaveBeenCalledWith(8, 37);
    expect(mockFunctions.add).toHaveBeenCalledWith(-11, 25);
    expect(mockFunctions.add).toHaveBeenCalledWith(13, -188);
    expect(mockFunctions.add).toHaveBeenCalledWith(7, 26);
    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });

  test('testa função subtract', () => {
    mockFunctions.subtract = jest.fn().mockImplementation((a, b) => a - b);
    mockFunctions.subtract(899, 35);
    mockFunctions.subtract(-17, 333);
    mockFunctions.subtract(45, 97);
    mockFunctions.subtract(23, -108);
    mockFunctions.subtract(-133, -29);

    expect(mockFunctions.subtract).toHaveBeenCalled();
    expect(mockFunctions.subtract).toHaveBeenCalledTimes(5);
    expect(mockFunctions.subtract).toHaveBeenCalledWith(899, 35);
    expect(mockFunctions.subtract).toHaveBeenCalledWith(-17, 333);
    expect(mockFunctions.subtract).toHaveBeenCalledWith(45, 97);
    expect(mockFunctions.subtract).toHaveBeenCalledWith(23, -108);
    expect(mockFunctions.subtract).toHaveBeenCalledWith(-133, -29);
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });

  test('testa função multiply', () => {
    mockFunctions.multiply = jest.fn().mockImplementation((a, b) => a * b);
    mockFunctions.multiply(1, 2);
    mockFunctions.multiply(0, 5);
    mockFunctions.multiply(-4, 9);
    mockFunctions.multiply(-12, -7);
    mockFunctions.multiply(19, 23);

    expect(mockFunctions.multiply).toHaveBeenCalled();
    expect(mockFunctions.multiply).toHaveBeenCalledTimes(5);
    expect(mockFunctions.multiply).toHaveBeenCalledWith(1, 2);
    expect(mockFunctions.multiply).toHaveBeenCalledWith(0, 5);
    expect(mockFunctions.multiply).toHaveBeenCalledWith(-4, 9);
    expect(mockFunctions.multiply).toHaveBeenCalledWith(-12, -7);
    expect(mockFunctions.multiply).toHaveBeenCalledWith(19, 23);
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });

  test('testa função divide', () => {
    mockFunctions.divide = jest.fn().mockImplementation((a, b) => a / b);
    mockFunctions.divide(169, 13);
    mockFunctions.divide(-1900, 5);
    mockFunctions.divide(42, 7);
    mockFunctions.divide(729, 243);
    mockFunctions.divide(1331, 11);

    expect(mockFunctions.divide).toHaveBeenCalled();
    expect(mockFunctions.divide).toHaveBeenCalledTimes(5);
    expect(mockFunctions.divide).toHaveBeenCalledWith(169, 13);
    expect(mockFunctions.divide).toHaveBeenCalledWith(-1900, 5);
    expect(mockFunctions.divide).toHaveBeenCalledWith(42, 7);
    expect(mockFunctions.divide).toHaveBeenCalledWith(729, 243);
    expect(mockFunctions.divide).toHaveBeenCalledWith(1331, 11);
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });

  test('testa função power', () => {
    mockFunctions.power = jest.fn().mockImplementation((a, b) => a ** b);

    mockFunctions.power(10, 2);
    mockFunctions.power(2, 10);
    mockFunctions.power(5, 5);
    mockFunctions.power(1, 10);
    mockFunctions.power(0, 0);

    expect(mockFunctions.power).toHaveBeenCalled();
    expect(mockFunctions.power).toHaveBeenCalledTimes(5);
    expect(mockFunctions.power).toHaveBeenCalledWith(10, 2);
    expect(mockFunctions.power).toHaveBeenCalledWith(2, 10);
    expect(mockFunctions.power).toHaveBeenCalledWith(5, 5);
    expect(mockFunctions.power).toHaveBeenCalledWith(1, 10);
    expect(mockFunctions.power).toHaveBeenCalledWith(0, 0);

    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });

  test('testa função factorial', () => {
    mockFunctions.factorial = jest.fn().mockImplementation((n) => {
      let total = 1;
      while (n > 0) {
        total *= n;
        n -= 1;
      }
      return total;
    });

    mockFunctions.factorial(5);
    mockFunctions.factorial(10);
    mockFunctions.factorial(3);
    mockFunctions.factorial(8);
    mockFunctions.factorial(2);

    expect(mockFunctions.factorial).toHaveBeenCalled();
    expect(mockFunctions.factorial).toHaveBeenCalledTimes(5);
    expect(mockFunctions.factorial).toHaveBeenCalledWith(5);
    expect(mockFunctions.factorial).toHaveBeenCalledWith(10);
    expect(mockFunctions.factorial).toHaveBeenCalledWith(3);
    expect(mockFunctions.factorial).toHaveBeenCalledWith(8);
    expect(mockFunctions.factorial).toHaveBeenCalledWith(2);
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
