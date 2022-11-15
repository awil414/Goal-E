// Button clicked to CREATE goal

const newGoals = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="goal-title"]').value.trim();
  const description = document
    .querySelector('input[name="goal-steps"]')
    .value.trim();

  // Send a POST request to the API endpoint
  const response = await fetch(`/api/create`, {
    method: "POST",
    body: JSON.stringify({ title, description }), //description removed
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

//This needs to match button in createGoals.handlebars
document.querySelector("#goalInput-button").addEventListener("click", newGoals);

//button clicked, taken to login page
const profile = async () => {
  const response = await fetch("/api/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  }
};

document.querySelector("#returnHome").addEventListener("click", profile);
