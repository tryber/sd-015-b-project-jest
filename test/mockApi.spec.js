const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const tunico = {
  gender: 'male',
  name: {
    title: 'Ms',
    first: 'Antônio',
    last: 'Britto',
  },
  location: {
    street: {
      number: 9877,
      name: 'Dommeldalseweg',
    },
    city: 'Zuidwolde',
    state: 'Zuid-Holland',
    country: 'Brazil',
    postcode: 52327,
    coordinates: {
      latitude: '38.6125',
      longitude: '69.0869',
    },
    timezone: {
      offset: '+4:30',
      description: 'Kabul',
    },
  },
  email: 'tunico@bol.com.br',
  login: {
    uuid: '132af6ff-7913-477b-81ca-eaa2966691a4',
    username: 'tunicao123',
    password: '1234567890',
    salt: 'LhpCCRbg',
    md5: '8b8e8ea2659ccfc6d566ce16f3625ba5',
    sha1: '918a5ff3f238aeacf1e3aa87ef6036810b675d6b',
    sha256: 'b5020cc039e7682eea908b67f0392a726e57164ce59db9604aca9216e38ee756',
  },
  dob: {
    date: '1979-05-13T16:05:13.067Z',
    age: 42,
  },
  registered: {
    date: '2004-07-13T18:38:39.727Z',
    age: 17,
  },
  phone: '(444)-506-2111',
  cell: '(351)-436-4935',
  id: {
    name: 'BSN',
    value: '36447451',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/57.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/57.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/57.jpg',
  },
  nat: 'NL',
};

describe('2 - Verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui
  api.fetchURL = jest.spyOn(api, 'fetchURL');
  test('verifica se o usuário é o tunico', async () => {
    api.fetchURL.mockResolvedValue(tunico);
    api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    });
  });
});
