let phoneRegex = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/;

const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

function validationSetup(formId){
    let form = document.getElementById(formId);

    let inputs = document.querySelectorAll(".form-input");
    for (input of inputs) {
        input.addEventListener("change", inputChanged );
    }
    let checkBoxes = document.querySelectorAll(".form-check-box");
    for (box of checkBoxes) {
        box.addEventListener("change", inputChanged );
    }

    form.addEventListener("submit", formSubmit);
}

function formSubmit(e){
    let form = e.currentTarget;
    //if you don't preventDefault and stopPropagation
    //the default form action would be to redirect to the url in the 'action' attribute of the form
    //https://wp.zybooks.com/form-viewer.php
    e.preventDefault(); //for now so we don't redirect
    e.stopPropagation();

    validateForm();

    //DOM checkValidity function tells you current status of form according to html5

    if (!form.checkValidity()) {
        //TODO - if form is invalid, set 'was-validated' class on all inputs to show errors
        let inputs = document.querySelectorAll(".form-input");
        for (input of inputs) {
            input.classList.add('was-validated')
        }
        let checkBoxes = document.querySelectorAll(".form-check-box");
        for (box of checkBoxes) {
            box.classList.add("was-validated")
        }
    
    } else {
        /*TODO - hide form and show success Message*/
        form.style.display = "none";
        document.getElementById("success").style.display = "block";
    }
}

function inputChanged(e) {
    let input = e.currentTarget;
    validateForm();
    input.classList.add('was-validated')
}


function validateForm() {

    checkRequired("first-name", "First Name is Required");
    checkRequired("last-name", "Last Name is Required");
    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");
    
    if(checkRequired("state", "State is Required")){
      validateState("state", "Not a valid State, enter two digit code e.g., UT");
    }
   
    if (checkRequired("email", "Email Address is required")) {
      checkFormat("email", "email format is bad", emailRegex)
    }
    if (checkRequired("zip", "Zip Code is Required")) {
      checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex)
    }
    if (checkRequired("phone", "Phone is required")) {
      checkFormat("phone", "phone format is bad", phoneRegex)
    }

    checkRequired("flyer", "you must select at least one!");
  
}


function checkRequired(inputId, errorMessage) {
    let input = document.getElementById(inputId);
    let valid = false;
    let inputType = input.type;
    switch (inputType) {
      case 'text': 
        let val = input.value
        if(val != null && val.length != 0){
            valid = true;
        }
        break;
      case 'checkbox':
        let checkboxes = document.querySelectorAll('.form-check-box');
        let selectedOptions = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                valid = true;
                selectedOptions.push(checkbox.value);
            }
        });
        break;
    }
    setElementValidity(inputId, valid, errorMessage);
    
    return valid;
}



function setElementValidity(inputId, valid, errorMessage) {
    let input = document.getElementById(inputId);
  
    if (valid) {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity(errorMessage);
      //TODO  insert or remove message in error div for element
        if(document.getElementById(inputId).type == "text"){
          let string = "#"+inputId + " + p"
          let errorP = document.querySelector(string)
          if(errorP != null)
            errorP.textContent = errorMessage
        }
        else{
          let errorP = document.querySelector("#flyer-error");
          console.log(errorP)
          if(errorP != null)
            errorP.textContent = errorMessage
        }
        
    }
  
}

function checkFormat(inputId, errorMessage, regex) {
    let inputValue = document.getElementById(inputId).value;
    let valid = false

    if (regex.test(inputValue)) {
        valid = true
    }
  
    setElementValidity(inputId, valid, errorMessage);
    return valid; 
}

function validateState(inputId, errorMessage) {
    let input = document.getElementById(inputId);
    let valid = false;

    let inputValue = input.value;
    inputValue = inputValue.toUpperCase();

    for(state of stateAbbreviations){
        if(state == inputValue){
            valid = true
            break;
        }
    }
   
    setElementValidity(inputId, valid, errorMessage);
  }