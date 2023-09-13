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
// delete post
const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const confirmed = confirm("are you sure you want to delete this post?");
    // send a DELETE request to api endpoint
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
// redirect to update/ taget id route
const updateButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    if (event.target.classList.contains("btn-light")) {
      const id = event.target.getAttribute("data-id");
      document.location.href = `/update/${id}`;
    }
  }
};
// query selectors
// event listeners
document
  .querySelector(".new-project-form")
  .addEventListener("submit", addProject);

const deleteButtons = document.querySelectorAll(".btn-danger");
deleteButtons.forEach((button) =>
  button.addEventListener("click", delButtonHandler)
);

const updateButtons = document.querySelectorAll(".btn-light");
updateButtons.forEach((button) =>
  button.addEventListener("click", updateButtonHandler)
);
