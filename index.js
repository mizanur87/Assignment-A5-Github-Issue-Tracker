// console.log("hello from inde js");

// All the id intiliaze with variable here
const userID = document.querySelector("#userID");
const passID = document.querySelector("#passID");
const signBtn = document.querySelector("#signBtn");

// Get values

signBtn.addEventListener("click", function () {
  const userIDValue = userID.value;
  const passIDValue = passID.value;

  if (userIDValue == "admin" && passIDValue == "admin123") {
    alert("Log in sucessful");
    window.location.assign("/home.html");
  } else {
    alert("Incorrect UserName or Password");
  }
});
