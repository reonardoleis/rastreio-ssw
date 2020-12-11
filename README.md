<h1 align="center">Rastreio SSW 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
</p>

> Implementação para rastreio de encomendas de transportadoras que utilizam o sistema SSW. Utiliza Selenium para a pesquisa e retorna JSON que será retornado ao usuário via callback que utiliza o método _res.end()_ do ExpressJS. **Feito para ser utilizado usando ExpressJS como server. Você pode ver um exemplo de utilização em _examples_.**

## Utilização

### 1. Instalação

Basta clonar o projeto (ou somente a pasta _src_) e colocar na pasta do seu projeto. Após isso, basta fazer a importação passando o caminho relativo. Por exemplo, caso os arquivos da pasta _src_ da biblioteca estejam numa pasta chamada _rastreio_ do seu projeto, basta importar como descrito no passo 2.


### 2. Utilização

Você deve importar a biblioteca no seu projeto. Atualmente, só existe a busca de encomenda por CPF (retornará a encomenda mais nova cadastrada). Exemplo:

```javascript
const { searchByCpf } = require('./rastreio/ssw');
```

## Show your support

Give a ⭐️ if this project helped you!


