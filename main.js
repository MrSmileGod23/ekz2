let inputCheckbox = document.querySelector('.checkbox-box');
let inputCheckbox2 = document.querySelector('.checkbox-box2');
let inputRadio = document.querySelector('.radio-box');
let inputRadio2 = document.querySelector('.radio-box2');
function validate_form() {

  valid = true;

  if (document.form.name.value == "") {
      alert("Пожалуйста заполните поле 'Имя'.");
      valid = false;
  } else if (document.form.email.value == "") {
      alert("Пожалуйста заполните поле 'Email'.");
      valid = false;

} else if (!inputCheckbox.checked && !inputCheckbox2.checked) {
  
  alert("Пожалуйста нажмите Checkbox.");
  valid = false;
}
else if (!inputRadio.checked && !inputRadio2.checked) {
  
alert("Пожалуйста нажмите Radio.");
valid = false;
}
else {
  document.getElementById("result").style.display = "flex";
  return valid;

}

}