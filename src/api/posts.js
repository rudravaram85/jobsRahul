const postPost = (postTitle, postBody) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(json => console.log("created", json));
};

const putPost = (postId, postTitle, postBody) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: postId,
      title: postTitle,
      body: postBody,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(json => console.log("edited", json));
};

const deletePost = postId => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(json => console.log("deleted", json));
};

export { postPost, putPost, deletePost };
