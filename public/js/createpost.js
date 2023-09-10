const addProject = async (event) => {
  event.preventDefault();

  // Collect values from the comment-add text area
  const title = document.querySelector("#project-name").value.trim();
  const description = document.querySelector("#project-desc").value.trim();

  if (title && description) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/createpost", {
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
document
  .querySelector(".new-project-form")
  .addEventListener("submit", addProject);
