let myInput = document.querySelector(".passwordInput");
let icon = document.getElementsByTagName('i')[0];
let urt = document.getElementById("cH");
let lL = document.getElementById("lL");
let uP = document.getElementById("uP");
let number = document.getElementById("num");
let sS  = document.getElementById("sS");

  myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    lL.classList.remove("invalid");
    lL.classList.add("valid");
  } else {
    lL.classList.remove("valid");
    lL.classList.add("invalid");
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    uP.classList.remove("invalid");
    uP.classList.add("valid");
  } else {
    uP.classList.remove("valid");
    uP.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  if(myInput.value.length >= 10) {
    urt.classList.remove("invalid");
    urt.classList.add("valid");
  } else {
    urt.classList.remove("valid");
    urt.classList.add("invalid");
  }

  var specialSymbol = /[!-*]/g;
  if(myInput.value.match(specialSymbol)) {
    sS.classList.remove("invalid");
    sS.classList.add("valid");
  } else {
    sS.classList.remove("valid");
    sS.classList.add("invalid");
  }
}
if(myInput.type = 'text'){
        icon.addEventListener("click", function(){
        myInput.type = 'password';
        })
    }
     // regx 