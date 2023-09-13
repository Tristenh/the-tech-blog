const addComment = async (event) => {
  event.preventDefault();

  // Collect values from the comment-add text area
  const commentdesc = document.querySelector("#comment-add").value.trim();
  const post_id = document.querySelector("#post-id").value.trim();

  if (commentdesc && post_id) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ commentdesc, post_id }),
      headers: { "Content-Type": "application/json" },
    });
    // if ok reload page
    if (response.ok) {
      // If successful, reload page
      console.log("added a comment");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector(".new-comment").addEventListener("submit", addComment);
