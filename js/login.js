const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function handleClick() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorText = document.getElementById("error-text");

  if (email === "" || password === "") {
    errorText.innerHTML = "Please enter all fields";
  } else if (!email.match(emailRegex)) {
    errorText.innerHTML = "Please enter valid email";
  } else {
    errorText.style.color = "green";
    errorText.innerHTML = "Logged in succesfully!";
  }
}
