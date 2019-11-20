// https://jqueryui.com/progressbar/

$("#progressbar").progressbar({
  value: 0
});

function validateName(name){
  if(name === ""){
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateMessage(message){
  if(message === ""){
    return false;
  }
  
  return true;
}

function validateMessage2(message){
  if(message.length < 20){
    return false;
  }
  
  return true;
}

function updateProgressBar(){
  let numberOfValidatedFieldsLET = numberOfValidatedFields();
  let lol = document.querySelector(".ui-progressbar-value");

  if(numberOfValidatedFieldsLET == 0){
    $("#progressbar").progressbar({
      value: 0,
    });
    lol.innerHTML = "0%";
  }else if(numberOfValidatedFieldsLET == 1){
    $("#progressbar").progressbar({
      value: 33
    });
    lol.innerHTML = "33%";
  }else if(numberOfValidatedFieldsLET == 2){
    $("#progressbar").progressbar({
      value: 66
    });
    lol.innerHTML = "66%";
  }else if(numberOfValidatedFieldsLET == 3){
    $("#progressbar").progressbar({
      value: 100
    });
    lol.innerHTML = "100%";
  }else{
    $("#progressbar").progressbar({
      value: 0
    });
    lol.innerHTML = "0%";
  }
}

function numberOfValidatedFields(){
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  let counter = 0;


  if(validateName(name)){
    counter++;
  }

  if(validateEmail(email)){
    counter++;
  }

  if(validateMessage(message) && validateMessage2(message)){
    counter++;
  }

  return counter;
}

function validateForm() {
  
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let radios = document.getElementsByName('radio-age');
    let year;

    if(!validateName(name)){
      alert("Потребно је унети име.");

      return false;
    }


    if(!validateEmail(email)){
      alert("Погрешан формат е-маила.");

      return false;
    }

    if(!validateMessage(message)){
      alert("Потребно је унети поруку.");

      return false;
    }

    if(!validateMessage2(message)){
      alert("Порука мора садржати бар 20 карактера.");

      return false;
    }

    for (let i = 0, length = radios.length; i < length; i++){
      if (radios[i].checked){
        year = radios[i].value;

        break;
      }
    }

    if(year == undefined){
      year = "Није унето.";
    }

    alert("Име: " + name + "\nЕ-маил: " + email + "\nГодине: " + year + "\nПорука: " + message + "\nПослато датума: " + date);

    return true;
}

// https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i/19079425

function getTodaysDate(){
  let today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1; // January je 0 !!!
  var year = today.getFullYear();

  if (day < 10) {
    day = '0' + day;
  } 

  if (month < 10) {
    month = '0' + month;
  } 

  today = day + '.' + month + '.' + year + ".";
  
  return today;
}


let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

// BORDER FOR NAME

nameInput.addEventListener("click", () => {
    nameInput.style.border = "2px solid black";
});

window.addEventListener("click", (event) => {
  if(event.target.nodeName != "INPUT" || event.target.type == "email" || event.target.type == "textarea"){
    nameInput.style.border = "none";
    updateProgressBar();
  }
});

nameInput.addEventListener("keyup", () => {
  updateProgressBar();
});

// BORDER FOR EMAIL

emailInput.addEventListener("click", () => {
  emailInput.style.border = "2px solid black";
});

window.addEventListener("click", (event) => {
  if(event.target.nodeName != "INPUT" || event.target.type == "text" || event.target.type == "textarea"){
    emailInput.style.border = "none";
    updateProgressBar();
  }
});

emailInput.addEventListener("keyup", () => {
  updateProgressBar();
});

// BORDER FOR MESSAGE

messageInput.addEventListener("click", () => {
  messageInput.style.border = "2px solid black";
});

window.addEventListener("click", (event) => {
  if(event.target.nodeName != "TEXTAREA"){
    messageInput.style.border = "none";
    updateProgressBar();
  }
});

messageInput.addEventListener("keyup", () => {
  updateProgressBar();
});

// DATE

let date = getTodaysDate();

let pdate = document.querySelector(".date small");
pdate.innerHTML = date;

