async function allPosts(req, res) {
  const db = req.app.get("db");
  const posts = await db.posts.getAllPosts();

  res.status(200).json(posts)
}

async function addPost(req, res) {
  const { category_name, title, content } = req.body;
  const user_id = req.session.user.user_id;

  const db = req.app.get("db");

  const addedPost = await db.posts.addPost([category_name, title, content, user_id]);
  console.log(addedPost)
  res.status(200).json(addedPost);
}

async function editPost(req, res) {
  const { title, content } = req.body;
  const post_id = +req.params.post_id;
  const user_id = req.session.user.user_id;

  const db = req.app.get("db");

  const editedPost = await db.posts.editPost([
    title,
    content,
    user_id,
    post_id
  ])
  console.log(editedPost)
  res.status(200).json(editedPost);
}

async function deletePost(req, res) {
  const post_id = +req.params.post_id;
  const user_id = req.session.user.user_id;
  const db = req.app.get("db");

  const updatedPosts = await db.posts.deletePost([post_id, user_id])

  res.status(200).json(updatedPosts);
}

async function allPostsByCategoryName(req, res) {
  const category_name = req.params.category_name;
  const db = req.app.get("db");

  const posts = await db.posts.getAllPostsByCategoryName(category_name)

  res.status(200).json(posts);
}

module.exports = {
  allPosts,
  addPost,
  editPost,
  deletePost,
  allPostsByCategoryName
}