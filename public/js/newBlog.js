async function newComment(event) {
    event.preventDefault();
    const blogText = document.querySelector('#blogText').value;
    const blogTitle = document.querySelector('#blogTitle').value;
    

    const response = await fetch(`/newBlog`, {
      method: 'POST',
      body: JSON.stringify({
        title: blogTitle,
        contents: blogText
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the Blog is added, the 'dashboard' template will be rerendered
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add Blog');
    }
  }
  
  document.querySelector('#BlogBar').addEventListener('submit', newComment);