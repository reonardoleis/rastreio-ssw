<h1 align="center">Welcome to Rastreio SSW 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
</p>

> Implementação para rastreio de encomendas de transportadoras que utilizam o sistema SSW. Utiliza Selenium para a pesquisa e retorna JSON que será retornado ao usuário via callback que utiliza o método _res.end()_ do ExpressJS. **Feito para ser utilizado usando ExpressJS como server. Você pode ver um exemplo de utilização em _examples_.**.

## Utilização

### 1. Instalação

Você pode instalar utilizando o NPM. Para isso, basta executar o seguinte comando:

```sh
$ npm install rastreio-ssw
```

### 2. Utilização

Você deve importar a biblioteca no seu projeto. Atualmente, só existe a busca de encomenda por CPF (retornará a encomenda mais nova cadastrada). 

```javascript
const { searchByCpf } = require('rastreio-ssw');
```

## Show your support

Give a ⭐️ if this project helped you!


