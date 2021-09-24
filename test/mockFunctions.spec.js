const mockFunctions = require('../src/mockFunctions');

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

  test('testa função add', () => {
    mockFunctions.add.mockImplementation((a, b) => a + b);

    expect(mockFunctions.add).toHaveBeenCalledTimes(0);
    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add).toHaveBeenCalled();
    expect(mockFunctions.add).toHaveBeenCalledTimes(1);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add).toHaveBeenCalledTimes(2);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add).toHaveBeenCalledTimes(3);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add).toHaveBeenCalledTimes(4);
    expect(mockFunctions.add(7, 26)).toEqual(33);
    expect(mockFunctions.add).toHaveBeenCalledTimes(5);
  });
  test('testa função subtract', () => {
    mockFunctions.subtract.mockImplementation((a, b) => a - b);

    expect(mockFunctions.subtract).toHaveBeenCalledTimes(0);
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract).toHaveBeenCalled();
    expect(mockFunctions.subtract).toHaveBeenCalledTimes(1);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract).toHaveBeenCalledTimes(2);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract).toHaveBeenCalledTimes(3);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract).toHaveBeenCalledTimes(4);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
    expect(mockFunctions.subtract).toHaveBeenCalledTimes(5);
  });
  test('testa função multiply', () => {
    mockFunctions.multiply.mockImplementation((a, b) => a * b);

    expect(mockFunctions.multiply).toHaveBeenCalledTimes(0);
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply).toHaveBeenCalled();
    expect(mockFunctions.multiply).toHaveBeenCalledTimes(1);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply).toHaveBeenCalledTimes(2);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply).toHaveBeenCalledTimes(3);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply).toHaveBeenCalledTimes(4);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
    expect(mockFunctions.multiply).toHaveBeenCalledTimes(5);
  });
  test('testa função divide', () => {
    mockFunctions.divide.mockImplementation((a, b) => a / b);

    expect(mockFunctions.divide).toHaveBeenCalledTimes(0);
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide).toHaveBeenCalled();
    expect(mockFunctions.divide).toHaveBeenCalledTimes(1);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide).toHaveBeenCalledTimes(2);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide).toHaveBeenCalledTimes(3);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide).toHaveBeenCalledTimes(4);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
    expect(mockFunctions.divide).toHaveBeenCalledTimes(5);
  });
  test('testa função power', () => {
    mockFunctions.power.mockImplementation((a, b) => a ** b);

    expect(mockFunctions.power).toHaveBeenCalledTimes(0);
    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power).toHaveBeenCalled();
    expect(mockFunctions.power).toHaveBeenCalledTimes(1);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power).toHaveBeenCalledTimes(2);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power).toHaveBeenCalledTimes(3);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power).toHaveBeenCalledTimes(4);
    expect(mockFunctions.power(0, 0)).toEqual(1);
    expect(mockFunctions.power).toHaveBeenCalledTimes(5);
  });
  test('testa função factorial', () => {
    mockFunctions.factorial.mockImplementation((a) => {
      let fact = 1;
      for (let i = 1; i <= a; i += 1) {
        fact *= i;
      }
      return fact;
    });

    expect(mockFunctions.factorial).toHaveBeenCalledTimes(0);
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial).toHaveBeenCalled();
    expect(mockFunctions.factorial).toHaveBeenCalledTimes(1);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial).toHaveBeenCalledTimes(2);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial).toHaveBeenCalledTimes(3);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial).toHaveBeenCalledTimes(4);
    expect(mockFunctions.factorial(2)).toEqual(2);
    expect(mockFunctions.factorial).toHaveBeenCalledTimes(5);
  });
});
