delButFav = document.querySelectorAll(".delBut");
//  delete user created recipes
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("user-id")) {
    const id = event.target.getAttribute("user-id");
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/favourites/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/api/user-profile");
    } else {
      alert("Failed to delete project");
    }
  }
};
// for deleting user favourite recipes
const delUserRep = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/user-profile/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/api/user-profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

delButFav.forEach((del) => {
  del.addEventListener("click", delButtonHandler);
});
delButUser = document.querySelectorAll(".del-per");
delButUser.forEach((del) => {
  del.addEventListener("click", delUserRep);
});
