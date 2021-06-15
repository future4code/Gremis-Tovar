<h2 align="center">Astromatch</h2>

## ⚙️ Tecnologias Usadas:
- CSS3
- JavaScript 
- React Js 
- React-Router-Dom
- Styled Components
- Material UI
- React Tinder Card
- Axios

##  Instalação


## 🏁 Para rodar o projeto:

Clone este repositório em sua máquina:

```bash
$ git clone https://github.com/future4code/Gremis-Tovar.git
```

cd `Gremis-Tovar`

cd `quinzena8`

cd `astromatch` e rode:

```bash
npm install
```

```bash
npm install styled-components
```

```bash
npm install axios
```

```bash
npm install react-router-dom
```

```bash
npm install --save react-tinder-card
```

```bash
npm install @material-ui/core
```

```bash
npm install @material-ui/icons
```

para iniciar:

```bash
npm run start
```


<br/>


## ⚙️ Explicação da Aplicação

O site é a simulação de Tinder, ele tem duas telas, uma onde vai fazer os match dos perfis da API, e outra onde apareceram os perfis com quem fizeram match.

No cabeçalho temos 3 ícones, o primeiro leva-nos à página onde aparece a lista das pessoas com quem combinámos, a ideia é que se não tivermos correspondido aparecerá uma mensagem a avisar que não temos match. O segundo é um ícone sem nenhuma funcionalidade e o terceiro é aquele que nos direciona para a página inicial, que neste caso é a página onde aparecem os perfis dos vários personagens.

No principal, os personagens são localizados, juntamente com sua idade, nome, biografia e sua foto.

Imediatamente abaixo, encontraremos 3 ícones, o primeiro é um ícone de recarregar ou reiniciar.
Ao clicar neste ícone, solicitamos o CLEAR da API, ou seja, todo o nosso aplicativo é reiniciado.
O ícone do X é pressionado quando não gostamos do personagem e a imagem vai para o próximo, também podemos fazer isso deslizando a imagem diretamente para a esquerda.

E pressionamos o terceiro ícone para fazer match com o personagem. Ao voltar para a página onde eles estão listados, o caractere que acabamos de encontrar deve aparecer nela.

As requisições implementadas foram:
- Get profile to choose (pegar perfil para escolher - funcionalidade ubicada na tela principal que sucede imediatamente ao renderizar o site).
- Choose Person (escolher pessoa - funcionalidade ubicada na tela principal quando clicamos no ícone de coração azul).
- Get Matches (pegar matches - funcionalidade ubicada na tela das listas dos perfis).
-  Clear (limpar - funcionalidade ubicada na tela principal quando clicamos no ícone de reiniciar).


Sem mais delongas, fico atenta à correções e emissão de comentários.

Atenciosamente,

Gremis Tovar.