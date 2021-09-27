const mockFunctions = require('../src/mockFunctions');

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
  const somar = jest.spyOn(mockFunctions, 'add');
  const subtrair = jest.spyOn(mockFunctions, 'subtract');
  const multiplicar = jest.spyOn(mockFunctions, 'multiply');
  const dividir = jest.spyOn(mockFunctions, 'divide');
  const power = jest.spyOn(mockFunctions, 'power');
  const factorial = jest.spyOn(mockFunctions, 'factorial');
  test('testa função add', () => {
    somar.mockImplementation((a, b) => a + b);
    expect(somar(1, 2)).toEqual(3);
    expect(somar(8, 37)).toEqual(45);
    expect(somar(-11, 25)).toEqual(14);
    expect(somar(13, -188)).toEqual(-175);
    expect(somar(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    subtrair.mockImplementation((a, b) => a - b);
    expect(subtrair(899, 35)).toEqual(864);
    expect(subtrair(-17, 333)).toEqual(-350);
    expect(subtrair(45, 97)).toEqual(-52);
    expect(subtrair(23, -108)).toEqual(131);
    expect(subtrair(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    multiplicar.mockImplementation((a, b) => a * b);
    expect(multiplicar(1, 2)).toEqual(2);
    expect(multiplicar(0, 5)).toEqual(0);
    expect(multiplicar(-4, 9)).toEqual(-36);
    expect(multiplicar(-12, -7)).toEqual(84);
    expect(multiplicar(19, 23)).toEqual(437);
  });
  test('testa função dividir', () => {
    dividir.mockImplementation((a, b) => a / b);
    expect(dividir(169, 13)).toEqual(13);
    expect(dividir(-1900, 5)).toEqual(-380);
    expect(dividir(42, 7)).toEqual(6);
    expect(dividir(729, 243)).toEqual(3);
    expect(dividir(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    power.mockImplementation((a, b) => {
      if (a === 0 && b === 0) {
        return 1;
      }
      let pow = a;
      for (let i = 1; i < b; i += 1) {
        pow = (pow + 1 - 1) * a;
      }
      return pow;
    });
    expect(power(10, 2)).toEqual(100);
    expect(power(2, 10)).toEqual(1024);
    expect(power(5, 5)).toEqual(3125);
    expect(power(1, 10)).toEqual(1);
    expect(power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    factorial.mockImplementation((a) => {
      let fact = a;
      for (let i = 1; i < a; i += 1) {
        fact *= i;
      }
      return fact;
    });
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
