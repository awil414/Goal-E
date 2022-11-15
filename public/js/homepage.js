//Button clicked, take to sign-in page
const getStarted = async () => {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/signup");
  } else {
    alert(response.statusText);
  }
};

//Button clicked, take to login page
const login = async () => {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  }
};

document.queryselector(".start-button").addEventListener("click", getStarted);
document.querySelector(".home-login-btn").addEventListener("click", login);
