//Potentially delete this entire file. All a tags take care of this.

//Button to create goal clicked taken to createGoals
const createGoal = async () => {
    const response = await fetch('/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},

    });

    if (response.ok){
        document.location.replace('/create');
    } else{
        alert(response.statusText);
    }

};

//Button to edit goal clicked, taken to editGoals
const editGoal = async () => {
    const response = await fetch('/edit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},

    });

    if (response.ok){
        document.location.replace('/edit');
    } else{
        alert(response.statusText);
    }

};

//document.querySelector('.profile-create-btn').addEventListener('click', createGoal )
//document.querySelector('.profile-edit-btn').addEventListener('click', editGoal)