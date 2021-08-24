<h2 align="center">Labefy</h2>


  ![](readme.png)
<hr/>


## ⚙️ Tecnologias Usadas:
- CSS3
- JavaScript 
- React Js 
- React Components
- Styled Components
- Axios

## ⚙️ Explicação da Aplicação

O site começa na página inicial (Inicio) onde existem listas de reprodução padrões e dentro delas também músicas predeterminadas, elas são organizadas em linhas e colunas e são compostas por cartões que contêm uma imagem, o título da lista de reprodução e um botão de reprodução, o que leva aos detalhes da lista de reprodução, nesses detalhes estão a música.

A navegação fica do lado esquerdo, podemos encontrar o link que nos levará a buscar músicas e playlists customizadas pelo usuário.

A busca por música (Procurar) é construída usando primeiro a API do spotify. Por isso o usuário será recebido por duas decisôes, a primeira é se quer adicionar uma música de forma manual, onde vai ser desplegado um input, onde tem que escrever nome da música, artista e URL (a mesma reproduz audio com formatos determinado). Depois vai ter dois entradas, em uma deverá colocar o token de acesso para que o Spotify possa liberar a música que o usuário deseja pesquisar, após colocar o token e clicar, ele poderá iniciar a pesquisa para a música por Nome.

Aparecerá uma lista que mostra o nome da música e dos artistas, quando o usuário clicar dentro de uma outra página se abrirá, onde o usuário decidirá salvar a respectiva música e em qual playlist deseja fazê-lo. Essa solicitação de salvamento é feita por meio da API labefy, assim como as demais solicitações. Depois da música estar criada, por qualquer das formas, pode ir até a playlist e reproduzir cada uma delas.

É importante mencionar que se o usuário não criou uma lista de reprodução, terá que fazê-lo primeiro.

Isso é feito na próxima referência, que são suas listas de reprodução(Suas Playlits). Nesta página o usuário pode criar, excluir e visualizar os detalhes das listas de reprodução, a apresentação é semelhante às listas de reprodução da página inicial (nela o usuário não pode fazer ação nenhuma).

Uma vez que o usuário criou uma lista de reprodução e salvou as músicas, ele poderá ver os detalhes da lista de reprodução clicando no ícone de reprodução ou play.

As músicas são apresentadas em linhas distribuidas em filas, no cabeçalho tem nome e a imagem de referência da lista de reprodução no título.

Nesta página o usuário pode ver o nome da música e do artista, excluí-los e clicar em like na playlist.


##  Instalação


## 🏁 Para rodar o projeto:

Clone este repositório em sua máquina:

```bash
$ git clone https://github.com/future4code/Gremis-Tovar.git
```

cd `Gremis-Tovar`

cd `quinzena7`

cd `labefy` e rode:

```bash
npm install
```
para iniciar:

```bash
npm run start
```


<br/>

##  Conclusão

Este projeto Labefy corresponde ao Módulo 5 do curso Labenu, onde iniciamos a exploração da biblioteca React.
No final do projeto tentei usar e praticar todo o conteúdo visto em cada sessão da aula:

- Conceitos de Networking (front end, back end, APIs, protocolos, REST)
- Protocolos HTTP e HTTPS
- Postman
- axios
- Assincronicidade e Promises
- .then e .catch
- async e await
- Integrações com APIs públicas

É importante mencionar que também procurei colocar em prática técnicas, códigos e conselhos encontrados na documentação e na web. Ainda há muito por andar, mas no geral fiquei feliz com o resultado, sem mais ao momento,

Atenciosamente,

Gremis Tovar.


P.D. Um protótipo deste aplicativo (MVP - Produto Mínimo Viável) pode ser visto no seguinte endereço:

http://labefy-gremis.surge.sh/
