var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  // if the name inputed dosnt match this characters, then return false
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter full name";
    return false;
  }
  // if there is no error then show valid
  nameError.innerHTML =
    '<ion-icon id="icon" name="checkmark-done-circle-outline"></ion-icon>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  //   console.log(phone, "hhhh");

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{1,10}$/)) {
    phoneError.innerHTML = "Only digits is required";
    return false;
  }

  phoneError.innerHTML =
    '<ion-icon id="icon" name="checkmark-done-circle-outline"></ion-icon>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.lenght == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; example of regular expression
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "invalid email";
    console.log(email, "jjj");
    return false;
  }
  emailError.innerHTML =
    '<ion-icon id="icon" name="checkmark-done-circle-outline"></ion-icon>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;
  console.log(left, "kkk");

  if (left > 0) {
    messageError.innerHTML = left + "more characters required";
    return false;
  }

  messageError.innerHTML =
    '<ion-icon id="icon" name="checkmark-done-circle-outline"></ion-icon>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
