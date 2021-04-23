let posts = [];
let post = localStorage.getItem("post");

if (localStorage.getItem("posts") == null) {
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
} else {
  posts = JSON.parse(localStorage.getItem("posts"));
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

const postContent = document.getElementById("container-de-posts");

posts.forEach((post) => {
  postContent.innerHTML += post;
});
