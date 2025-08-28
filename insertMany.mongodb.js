/* Criação da Constante que representa o nome do banco de dados */
const database = "BD3-NoSQL-Produtos";

/* Criação da Constante que representa o nome da coleção */
const collection = "bd3-nosql-atv7";

/* Define o BD que será utilizado, caso não tenha será criado */
use(database);

/* Inserindo 10 dados */
db['bd3-nosql-atv7'].insertMany([
    {
      "nome":"Notebook Dell",
      "categoria": "Tecnologia",
      "preco": 3500
    },
    {
      "nome": "Mouse",
      "categoria": "Acessorios",
      "preco": 180
    },
    {
      "nome":"Caixa de Som",
      "categoria": "audio",
      "preco": 600
    },
        {
      "nome":"Teclado Gamer",
      "categoria": "Acessorios",
      "preco": 420
    },
     {
      "nome":"Impressora HP",
      "categoria": "Tecnologia",
      "preco": 780
    },
    {
      "nome":"Cadeira Gamer",
      "categoria": "Moveis",
      "preco": 890
    },
    {
      "nome": "Monitor LG",
      "categoria": "Tecnologia",
      "preco": 1200
    },
    {
      "nome":"Tablet Samsung",
      "categoria": "Tecnologia",
      "preco": 950
    },
        {
      "nome":"Mousepad",
      "categoria": "Acessorios",
      "preco": 50
    },
     {
      "nome":"Cabo de rede",
      "categoria": "Acessorios",
      "preco": 20
    },
]);