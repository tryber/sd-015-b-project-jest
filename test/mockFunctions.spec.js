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
  const addFixed = (a, b) => a + b;
  mockFunctions.add.mockImplementation(addFixed);

  const subtractFixed = (a, b) => a - b;
  mockFunctions.subtract.mockImplementation(subtractFixed);

  const multiplyFixed = (a, b) => a * b;
  mockFunctions.multiply.mockImplementation(multiplyFixed);

  const divideFixed = (a, b) => {
    if (b === 0) {
      throw new Error('Não se pode dividir por zero!');
    }
    return a / b;
  };
  mockFunctions.divide.mockImplementation(divideFixed);

  const factorialFixed = (n) => {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      return 'Essa função não trabalha com números negativos';
    }
    if (!Number.isInteger(n)) {
      return 'Essa função não trabalha com decimais';
    }
    return [...Array(n).keys()].reduce((acc, curr) => acc * (curr + 1), 1);
  };
  mockFunctions.factorial.mockImplementation(factorialFixed);

  const powerDecimals = (x, n) => {
    const textError = 'Não há resposta no conjunto dos reais';
    if (x < 0) {
      if (!Number.isInteger(n)) {
        return textError;
      }
      if ((1 / n) % 2 === 0) {
        return textError;
      }
    }
    return x ** n;
  };
  const powerFixed = (x, n) => {
    if (x === 0 && n === 0) {
      return 1;
    }
    return powerDecimals(x, n);
  };
  mockFunctions.power.mockImplementation(powerFixed);

  test('testa função add', () => {
    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
    expect(() => { mockFunctions.divide(1, 0) });
      .toThrow(new Error('Não se pode dividir por zero!'));
  });
  test('testa função power', () => {
    const textError = 'Não há resposta no conjunto dos reais';
    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
    expect(mockFunctions.power(1.5, 2)).toEqual(2.25);
    expect(mockFunctions.power(-1, 1.5)).toEqual(textError);
    expect(mockFunctions.power(-1, 0.5)).toEqual(textError);
    expect(mockFunctions.power(-1, 2)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
    expect(mockFunctions.factorial(0)).toEqual(1);
    expect(mockFunctions.factorial(-1)).toEqual('Essa função não trabalha com números negativos');
    expect(mockFunctions.factorial(1.4)).toEqual('Essa função não trabalha com decimais');
  });
});
