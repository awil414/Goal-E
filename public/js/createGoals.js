// Button clicked to CREATE goal
//method:"POST"
//document.location.replace("/profile") with new goal rendered on profile

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

document.querySelector('.goalInput-button').addEventListener('submit', newGoals);
