<!-- markdownlint-disable MD033 -->

# Ignite Node.js - `GymPass`

<div align="center">
   <img alt="Node.js" src=".github/assets/nodejs-logo.jpg" width="25%"/>
</div>

<div align="center">

[**Projeto**](#projeto) &nbsp;&nbsp;**•**&nbsp;&nbsp;
[**Tecnologias**](#tecnologias) &nbsp;&nbsp;**•**&nbsp;&nbsp;
[**Licença**](#licença)

</div>

## Projeto

Foi desenvolvido uma aplicação de check-ins para academias.

**Conceitos e recursos utilziados**:

- SOLID
- Design Patterns
- Docker para iniciar o banco de dados,
- JWT
- Refresh Tokens
- RBAC

### RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

### Comandos utilizados no projeto

```powershell
# iniciar projeto
$ npm init -y

# criar tsconfig.json
npx tsc --init

# iniciar prisma
npx prisma init

# executar tipagem / integração do prisma
npx prisma generate

# subir docker container ccom banco de dados postgresql
docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=<senha> -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

# exibir containers
docker ps

# todos os container já criados pelo desenvolvedor
docker ps -a

# executar imagem do banco de dados postgresql no docker
docker start api-solid-pg
# ou
docker start <CONTAINER_ID>

# parar imagem do banco de dados postgresql no docker
docker stop api-solid-pg
# ou
docker stop <CONTAINER_ID>

# executar migração do banco de dados
npx prisma migrate dev

# exibir intarface do banco de dados
npx prisma studio

# exibir coverage de testes (scripts do package.json)
# abrir o arquivo index.html dentro da pasta 'coverage' gerada
npm run test:coverage
```

## Tecnologias

## Licença

Distribuído sob a licença *MIT*. Veja [LICENSE](LICENSE) para mais informações.  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">

---

<h5 align="center">
  2023 - <a href="https://github.com/jefim9413/">Jefferson Marques</a>
</h5>