const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function submitContact() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const errorText = document.getElementById("error-text");

  if (name.value === "" || email.value === "" || message.value === "") {
    errorText.innerHTML = "Please enter all fields";
  } else if (!email.value.match(emailRegex)) {
    errorText.innerHTML = "Please enter valid email";
  } else {
    errorText.style.color = "green";
    errorText.innerHTML = "Your response recorded succesfully!";
    name.value = "";
    email.value = "";
    message.value = "";
  }
}
