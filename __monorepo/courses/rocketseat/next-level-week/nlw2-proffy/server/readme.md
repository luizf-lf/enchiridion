# Proffy Server

<img src="./docs/resources/img/icons/servers.svg" height="128px">

Repositório da aplicação servidor utilizado pela plataforma Proffy, desenvolvida durante a segunda edição da [#NextLevelWeek](https://nextlevelweek.com/).

> Esta documentação pode estar parcial ou incompleta, confira a documentação completa e atualizada de todo o projeto da plataforma Proffy em [luizf-lf/proffy](https://github.com/luizf-lf/proffy).

## Sobre

Este servidor da plataforma Proffy foi desenvolvido utilizando o `Node.js` juntamente com o `TypeScript`, além do `Knex` como _middleware_ da base de dados. Esta aplicação demonstra como é possível desenvolver uma aplicação de backend que disponibiliza APIs para aplicações de front-end consumirem.

## Instruções de execução

Estas instruções assumem que você utilize o `yarn` como gerenciador de pacotes. Porém é possível utilizar outro gerenciador de pacotes, como o `npm`, por exemplo.

Para inicializar este servidor de aplicação, primeiro instale as dependências necessárias:

`$ yarn install`

Em seguida realize a migração da base de dados com o [knex](http://knexjs.org/):

`$ yarn knex:migrate`

Este servidor utiliza o pacote [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) para servir a aplicação em um ambiente de desenvolvimento. Para utilizá-lo e inicializar o servidor, utilize o seguinte comando:

`$ yarn start`

<br />

## API REST

A aplicação disponibiliza alguns endpoints do tipo REST que são utilizados pelos clientes Web e Mobile da plataforma Proffy:

`GET /classes` Listagem de aulas.

Retorna informações dos professores e aulas de acordo com os parâmetros fornecidos através da URL.

Possíveis parâmetros:

| Parâmetro | Tipo   | Descrição              | Exemplo    |
| --------- | ------ | ---------------------- | ---------- |
| subject   | string | Nome da matéria        | Matemática |
| week_day  | number | Dia da semana de 0 a 6 | 1          |
| time      | string | Horário em _hh:mm_     | 12:30      |

Exemplo de requisição: http://127.0.0.1:8080/classes?subject=Biologia&week_day=3&time=12:00

**Detalhe:** É **obrigatório** informar todos o parâmetros, caso contrário o servidor irá retornar um `HTTP 400 Bad Request`.

**Retorno:** JSON contendo um array de informações dos professores encontrados de acordo com o filtro da requisição.

Exemplo de retorno:

```JSON
[
  {
    "id": 2,
    "subject": "Matemática",
    "cost": 90,
    "user_id": 2,
    "name": "Monica Murray",
    "avatar": "https://randomuser.me/api/portraits/women/62.jpg",
    "whatsapp": "+5511933335555",
    "bio": "Subtly charming advocate. Writer. Reader. Pop culture ninja. Music enthusiast."
  },
]
```

<br />

`POST /classes` Criação de aulas.

Nesta requisição deve ser enviado um JSON contendo as informações para cadastro de professore com o horário de suas aulas.

Exemplo do corpo da requisição:

```JSON
{
    "name": "Marion Ferguson",
    "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
    "whatsapp": "+5511999998888",
    "bio": "Total thinker. Reader. Travel advocate. Humble web buff. Extreme organizer. Bacon lover.",
    "subject": "Biologia",
    "cost": 40,
    "schedule": [
        {"week_day": "1", "from": "08:00", "to": "16:00"},
        {"week_day": "2", "from": "10:00", "to": "18:00"}
    ]
}
```

Caso os parâmetros estiverem corretos, o servidor irá retornar um `HTTP 201 Created`, juntamente com uma mensagem em JSON informando que a aula foi criada com sucesso:

```JSON
{
  "status": "Class created successfully"
}
```

<br />

`GET /connections` Listagem do total de conexões realizadas.

Não é necessário informar nenhum parâmetro na URL. Ao atingir o endpoint é retornado um JSON com o total de conexões já criadas:

```JSON
{
  "total": 132
}
```

<br />

`POST /connections` Criar uma nova conexão.

Nesta requisição deve ser enviado um JSON contendo apenas o _user_id_ do professor com qual foi criada a conexão.

Exemplo de requisição:

```JSON
{
    "user_id": 1
}
```

Se estiver tudo certo, o servidor irá enviar responder com um `HTTP 201 Created`.

## Considerações Finais.

Esta aplicação foi desenvolvida seguindo as orientações passadas durante a segunda edição da Next Level Week, promovido pela equipe da RocketSeat.

O intuito do evento é "elevar a pessoa ao próximo nível", demonstrando de forma prática como desenvolver uma aplicação funcional e completa utilizando as principais tecnologias utilizadas no mercado de desenvolvimento de sistemas com tecnologias web.

Este repositório faz parte de um projeto que contém um **servidor node.js**, um cliente web e um client mobile. Não esqueça de conferir a documentação completa contendo as demais partes da plataforma Proffy em [luizf-lf/proffy](https://github.com/luizf-lf/proffy).

> </> por luizf-lf
