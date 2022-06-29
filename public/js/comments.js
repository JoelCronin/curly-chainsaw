async function newComment(event) {
    event.preventDefault();
    const commentText = document.querySelector('#commentText').value;
    const URIid = document.location.pathname.split('/')
    console.log(URIid + "===================")

    const response = await fetch(`/comment`, {
      method: 'POST',
      body: JSON.stringify({
        comment: commentText,
        blog_id: URIid[2],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('#commentBar').addEventListener('submit', newComment);
    