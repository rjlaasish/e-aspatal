const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function handleClick() {
  console.log("ADAS");
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("rePassword").value;
  const errorText = document.getElementById("error-text");

  if (email === "" || username === "" || password === "" || rePassword === "") {
    errorText.innerHTML = "Please enter all fields";
  } else if (!email.match(emailRegex)) {
    console.log(email);
    errorText.innerHTML = "Please enter valid email";
  } else if (!password === rePassword) {
    errorText.innerHTML = "Password and Re-password doesnot match!";
  } else {
    errorText.style.color = "green";
    errorText.innerHTML = "User registered succesfully!";
  }
}
