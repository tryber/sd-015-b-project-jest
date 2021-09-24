// const mockFunctions = require('../src/mockFunctions');

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
  const multiMock = jest.fn((a, b) => a * b);
  const subMock = jest.fn((a, b) => a - b);
  const divMock = jest.fn((a, b) => a / b);
  const facMock = jest.fn((a) => {
    let fac = 1;
    for (let i = a; i > 0; i -= 1) {
      fac *= i;
    }
    return fac;
  });
  const powerMock = jest.fn((a, b) => a ** b);
  const addMock = jest.fn((a, b) => a + b);
  test('testa função add', () => {
    expect(addMock(1, 2)).toEqual(3);
    expect(addMock(8, 37)).toEqual(45);
    expect(addMock(-11, 25)).toEqual(14);
    expect(addMock(13, -188)).toEqual(-175);
    expect(addMock(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(subMock(899, 35)).toEqual(864);
    expect(subMock(-17, 333)).toEqual(-350);
    expect(subMock(45, 97)).toEqual(-52);
    expect(subMock(23, -108)).toEqual(131);
    expect(subMock(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(multiMock(1, 2)).toEqual(2);
    expect(multiMock(0, 5)).toEqual(0);
    expect(multiMock(-4, 9)).toEqual(-36);
    expect(multiMock(-12, -7)).toEqual(84);
    expect(multiMock(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(divMock(169, 13)).toEqual(13);
    expect(divMock(-1900, 5)).toEqual(-380);
    expect(divMock(42, 7)).toEqual(6);
    expect(divMock(729, 243)).toEqual(3);
    expect(divMock(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(powerMock(10, 2)).toEqual(100);
    expect(powerMock(2, 10)).toEqual(1024);
    expect(powerMock(5, 5)).toEqual(3125);
    expect(powerMock(1, 10)).toEqual(1);
    expect(powerMock(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(facMock(5)).toEqual(120);
    expect(facMock(10)).toEqual(3628800);
    expect(facMock(3)).toEqual(6);
    expect(facMock(8)).toEqual(40320);
    expect(facMock(2)).toEqual(2);
  });
});
