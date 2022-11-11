//Button to create goal clicked taken to createGoals
const createGoal = async () => {
    const response = await fetch('/profile', {
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
    const response = await fetch('/profile', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},

    });

    if (response.ok){
        document.location.replace('/edit');
    } else{
        alert(response.statusText);
    }

};

document.queryselector('.profile-create-btn').addEventListener('click', createGoal )
document.querySelector('.profile-edit-btn').addEventListener('click', editGoal)