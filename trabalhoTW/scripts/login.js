function handleLogin() {
  email = document.getElementById("inputEmail").value;
  password = document.getElementById("inputPassword").value;
  console.log(email, password);
  //abstraindo o uso de validaçao
  if (email === "40240358@esmad.ipp.pt" && password === "0123456") {
    console.log("window.location.redirect");
    window.location.href = "aboutPage.html";
    return false;
  } else {
    alert("Invalid User");
  }
}
