// Button clicked to CREATE goal


const newGoals = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="goal-title"]').value.trim();
    const steps = document.querySelector('input[name="goal-steps"]').value.trim();

    // Send a POST request to the API endpoint
  const response = await fetch(`/api/goals`, {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
};

//This needs to match button in createGoals.handlebars
document.querySelector('.goalInput-button').addEventListener('submit', newGoals);
