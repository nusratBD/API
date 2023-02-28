function loadData(){
    document.getElementById('btn').addEventListener('click', function(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>displayData(data))
    })
}
function displayData(data){
const commentArea = document.getElementById('comment-area');
for(let comment of data){
    let div = document.createElement('div');
    div.className = 'border rounded p-5 border-primary border-5 mb-5 bg-primary-subtle'
    div.innerHTML = `
    <h4>ID: ${comment.id}</h4>
    <h5>User Name: ${comment.name}</h5>
    <h5>Email: ${comment.email}</h5>
    <p>${comment.body}</p>
    `
    commentArea.appendChild(div);
}
}
loadData();