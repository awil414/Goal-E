//Button clicked to UPDATE
//method:"PUT"
//document.location.replace("/profile") with edits showing on profile page

const editGoalHandler = async (event) => {
  event.preventDefault();

  // Collect values from the goals 
  const title = document.querySelector('input[name="goal-title"]').value.trim();
  const description = document
    .querySelector('input[name="goal-steps"]')
    .value.trim();

  // Selects ONE goal
  const id = window.location.pathname.split('/')[3]

  // Send a PUT request to the API endpoint
  const response = await fetch(`/api/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description }),
    headers: { "Content-Type": "application/javascript" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};



document.querySelector("#editInput-button").addEventListener("click", editGoalHandler);


// I don't think we need this. It is deleting goal already.
//Button clicked to DELETE
//method:"DELETE"
//document.location.replace("/profile") with the deleted goal not showing
