const editGoalHandler = async (event) => {
  event.preventDefault();
  // Collect values from the goals
  const title = document.querySelector('input[name="goal-title"]').value.trim();
  const description = document
    .querySelector('input[name="goal-steps"]')
    .value.trim();

  // Selects ONE goal
  const id = window.location.pathname.split("/")[2];

  // Send a PUT request to the API endpoint
  const response = await fetch(`/api/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#editInput-button")
  .addEventListener("click", editGoalHandler);
