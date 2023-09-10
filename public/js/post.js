const addProject = async (event) => {
  event.preventDefault();
  // Collect values from the comment-add text area
  const title = document.querySelector("#project-name").value.trim();
  const description = document.querySelector("#project-desc").value.trim();
  if (title && description) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // If successful, reload page
      console.log("added a post");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const confirmed = confirm("are you sure you ewant to delete this post?");
    if (confirmed) {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete project");
      }
    }
  }
};
document
  .querySelector(".new-project-form")
  .addEventListener("submit", addProject);
document
  .querySelectorAll(".btn-danger")
  .forEach((button) => button.addEventListener("click", delButtonHandler))
  .addEventListener("click", delButtonHandler);
