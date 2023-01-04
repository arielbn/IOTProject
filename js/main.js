function openNav() {
    document.getElementById("myNav").style.width="100%";
}
function closeNav() {
    document.getElementById("myNav").style.width="0%";
}
const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}