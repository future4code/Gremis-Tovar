let postFinal = [];
let post = {
  titulo: document.getElementById("titulo-post"),
  autor: document.getElementById("autor-post"),
  conteudo: document.getElementById("conteudo-post"),
  imagem: document.getElementById("imagem-post"),
};

function pressedButton() {
  if (post.titulo.value !== "" && post.autor.value !== "" && post.conteudo.value !== "") {
    (post.titulo = document.getElementById("titulo-post").value),
    (post.autor = document.getElementById("autor-post").value),
    (post.conteudo = document.getElementById("conteudo-post").value),
    (post.imagem = document.getElementById("imagem-post").value),
    postFinal.push(post);
    createPost();
    clearInput();
  } else {
    alert("Todos os campos com (*) são obrigatórios");
  }
  
}

function createPost() {
  const postContent = document.getElementById("container-de-posts");
    postContent.innerHTML += `<div class="post">
    <h1>${postFinal[0].titulo}</h1>
    <h3>${postFinal[0].autor}</h3>
    <p>${postFinal[0].conteudo}</p>
    <img src=${postFinal[0].imagem}>
</div>`;
  }

function clearInput() {
   document.getElementById("titulo-post").value = ""
   document.getElementById("autor-post").value = ""
   document.getElementById("conteudo-post").value = ""
   document.getElementById("imagem-post").value = ""
}
