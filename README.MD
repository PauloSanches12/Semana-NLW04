<h1 align="center">NPS-NLW</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

 <img src="https://img.shields.io/static/v1?label=NLW&message=04&color=8257E5&labelColor=000000" alt="NLW 04" />
</p>

<br>

<p align="center">
  <img alt="Happy" src=".github/preview.png" width="100%">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Yup](https://github.com/jquense/yup)
- [Handlebars](https://handlebarsjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Nodemailer](https://nodemailer.com/about/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)

## 💻 Projeto

O NPS-NLW é uma aplicação que consiste em calcular o NPS de uma empresa. Nele fazemos o cadastro de usuários, cadastro de pesquisas, envio de e-mail para os usuários responderem as pesquisas de satisfação e com isso podemos realizar o cálculo do NPS.

Esse projeto foi desenvolvido durante a trilha de NodeJS, na quarta edição da NLW. Aprendemos conceitos sobre o que é um API, como iniciar um projeto utilizando Typescript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados, testes automatizados e envio de e-mail.

## 🔶 Diagrama

<img src="public/diagrama.png" alt="Diagrama da aplicação" />

## 🚀 Como executar

Clonar o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`

## Migrations
- Criar migration `yarn typeorm migration:create -n <NomeDaMigration>`
- Rodar as migrations `yarn typeorm migration:run`
- Reverter última migration criada `yarn typeorm migration:revert`

## Rodar os testes
- yarn test

A aplicação pode ser acessada em [`localhost:3333`](http://localhost:3333).

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
