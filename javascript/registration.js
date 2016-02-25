var sideTableCount = 0;
var textFields = document.getElementsByClassName("registrationTextFields");
for(var i= 0; i < 10; i++) {
    if(textFields[i].id == "emailTextField") {
        textFields[i].addEventListener("blur", function() {validateEmailTextField(this)});
    }
    else if(textFields[i].id == "phoneNumberTextField") {
        textFields[i].addEventListener("blur", function() {validatePhoneNumberTextField(this)});
    }
    else {
        textFields[i].addEventListener("blur", function() {textFieldOnBlur(this)});
    }
}

var accompanyCheckRadios = document.getElementsByName("accompanyCheckRadio");
for(var i= 0; i < accompanyCheckRadios.length; i++) {
    accompanyCheckRadios[i].addEventListener("click", function() {accompanyCheckRadioSelected(this)});
}

var foodCheckRadios = document.getElementsByName("foodCheckRadio");
for(var i= 0; i < accompanyCheckRadios.length; i++) {
    foodCheckRadios[i].addEventListener("click", function() {foodCheckRadioSelected(this)});
}

var accomodationCheckRadios = document.getElementsByName("accomodationCheckRadio");
for(var i= 0; i < accompanyCheckRadios.length; i++) {
    accomodationCheckRadios[i].addEventListener("click", function() {accomodationCheckRadioSelected(this)});
}

var closeButtons = document.getElementsByClassName("fa fa-times");
for(var i= 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {closeButtonPressed(this)});
}



function textFieldOnBlur(textField) {
   
    if(textField.value == ""){
        textField.style.borderColor = "red";
    }
    else {
        textField.style.borderColor = "white";
    }
}

function validateEmailTextField(emailTextField) {
    var emailRegEx = "^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$";
    if(emailTextField.value.match(emailRegEx)) {
        emailTextField.style.borderColor = "white";
    }
    else {
        emailTextField.style.borderColor = "red";
    }
}

function validatePhoneNumberTextField(phoneNumberTextField) {
    var phoneNumrRegEx = /^\d{10}$/;
    if(phoneNumberTextField.value.match(phoneNumrRegEx)) {
        phoneNumberTextField.style.borderColor = "white";
    }
    else {
        phoneNumberTextField.style.borderColor = "red";
    }
}

function accompanyCheckRadioSelected(accompanyCheckRadio) {
    if(accompanyCheckRadio.value == "yes") {
        document.getElementById("registrationTable").style.marginLeft = "150px";
        if(!(document.getElementById("accompanyingTable").style.display == "block")) {
            document.getElementById("accompanyingTable").style.display = "block";
            sideTableCount++;
        }
    }
    
    else {
        document.getElementById("registrationTable").style.marginLeft = "350px";
        
        if(!(document.getElementById("accompanyingTable").style.display == "none")) {
            document.getElementById("accompanyingTable").style.display = "none";
            sideTableCount--;
        }
    }
    setMainTablePosition();
}

function foodCheckRadioSelected(foodCheckRadio) {
    if(foodCheckRadio.value == "yes") {
        document.getElementById("registrationTable").style.marginLeft = "150px";
       
         if(!(document.getElementById("foodDetailsTable").style.display == "block")) {
            document.getElementById("foodDetailsTable").style.display = "block";
            sideTableCount++;
        }
    }
    
    else {
        document.getElementById("registrationTable").style.marginLeft = "350px";
        
        if(!(document.getElementById("foodDetailsTable").style.display == "none")) {
            document.getElementById("foodDetailsTable").style.display = "none";
            sideTableCount--;
        }
        
    }
    setMainTablePosition();
}

function accomodationCheckRadioSelected(accomodationCheckRadio) {
    if(accomodationCheckRadio.value == "yes") {
        document.getElementById("registrationTable").style.marginLeft = "150px";
        
        if(!(document.getElementById("accomodationDetailsTable").style.display == "block")) {
            document.getElementById("accomodationDetailsTable").style.display = "block";
            sideTableCount++;
        }
        document.getElementById("accomodationDetailsTable").style.display = "block";
        
    }
    
    else {
        document.getElementById("registrationTable").style.marginLeft = "350px";
        
        if(!(document.getElementById("accomodationDetailsTable").style.display == "none")) {
            document.getElementById("accomodationDetailsTable").style.display = "none";
            sideTableCount--;
        }
    }
    setMainTablePosition();
}

function setMainTablePosition() {
    
    if(sideTableCount > 0) {
        document.getElementById("registrationTable").style.marginLeft = "150px";
    }
    
    else {
        document.getElementById("registrationTable").style.marginLeft = "350px";
    }
         
}

function closeButtonPressed(closeButton) {
    var parentTableID;
    if(closeButton.id == "accomapnyClose") {
        parentTableID = "accompanyingTable";
    }
    
    else if(closeButton.id == "foodClose") {
        parentTableID = "foodDetailsTable";
    }
    
    else if(closeButton.id == "accomodationClose") {
        parentTableID = "accomodationDetailsTable";
    }
    if(!(document.getElementById(parentTableID).style.display == "none")) {
    document.getElementById(parentTableID).style.display = "none";
    sideTableCount--;
    }
    setMainTablePosition();
}