const updateForm = document.querySelector(".update-post-form");

updateForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the project ID from the button's data-id attribute
  const updateButton = event.target.querySelector(".update-btn");
  const id = updateButton.getAttribute("data-id");

  // Move these lines inside the conditional block
  const title = document.querySelector("#project-name").value.trim();
  const description = document.querySelector("#project-desc").value.trim();

  console.log("Update button clicked");
  console.log("ID:", id);

  if (title && description) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If the update is successful, redirect to the profile page
      document.location.replace("/profile");
    } else {
      // If there's an error, display an alert
      alert("Failed to update project");
    }
  }
});
