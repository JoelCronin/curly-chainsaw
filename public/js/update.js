async function deletePost(event) {
    event.preventDefault();
    const deletePostId = event.target.id
    const response = await fetch(`/update/${deletePostId}`, {
        method: 'DELETE'
    });
        if (response.ok) {
        document.location.replace('/dashboard')
        } else {
        alert('delete failed');
        }
}

const deleteButton = document.querySelectorAll('.deleteButton');
deleteButton.forEach(button =>{
    button.addEventListener('click', deletePost)
});

async function editBlog(event) {
    event.preventDefault();
    const titleInput = document.getElementById('blogTitle').value;
    const contentInput = document.getElementById('blogText').value;
    const path = document.location.pathname.split('/')
    const idURI = path[2]
    const response = await fetch(`/update/${idURI}`, {
    method: 'PUT',
    body: JSON.stringify({
        title: titleInput,
        contents: contentInput,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});
    if (response.ok) {
    document.location.replace('/dashboard')
    } else {
    alert('post failed');
    }
}
document.querySelector('#BlogUpdate').addEventListener('submit', editBlog);