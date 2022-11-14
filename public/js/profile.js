//Potentially delete this entire file. All a tags take care of this.

//Button to create goal clicked taken to createGoals
const createGoal = async () => {
  const response = await fetch("/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/create");
  } else {
    alert(response.statusText);
  }
};

//Button to edit goal clicked, taken to editGoals
// const editGoal = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/edit/${id}`, {
//       method: 'POST',
//     });

//     if (response.ok) {
//       document.location.replace('/edit');
//     } else {
//       alert('Failed to edit goal');
//     }
//   }
// };
// document.querySelector('.editGoalBtn').addEventListener('click', editGoal)
//  Delete Completed Goals
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/edit/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete goal");
    }
  }
};

document
  .querySelector(".deleteGoalBtn")
  .addEventListener("click", delButtonHandler);

//document.querySelector('.profile-create-btn').addEventListener('click', createGoal )
//document.querySelector('.profile-edit-btn').addEventListener('click', editGoal)
