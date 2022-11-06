var posts = []
var post = document.getElementById("post");
function addPost() {
    var bucket = document.getElementById("bucket");
    posts.push(post.value);
    console.log(posts);
    bucket.innerHTML = posts;
    post.value = ""
    

}