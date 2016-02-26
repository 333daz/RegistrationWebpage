var sideTableCount = 0;

// TextField AddEventListener
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

//collapseButton AddEventListener

var collapseButtons = document.getElementsByName("collapseButton");
for( var i = 0; i < collapseButtons.length ; i++) {
    collapseButtons[i].addEventListener("click", function() {collapseButtonPressed(this)});
    console.log(collapseButtons);
}

// side Form divs AddEventListener

var sideFormSwitchRadios = document.getElementsByClassName("sideFormSwitchRadios");
var x = 0;
for( var i = 0; i < sideFormSwitchRadios.length ; i++) {
    sideFormSwitchRadios[i].addEventListener("click", function() {sideFormRadioSwitched(this)});
}


// Text field null check
function textFieldOnBlur(textField) {
   
    if(textField.value == ""){
        textField.style.borderColor = "red";
    }
    else {
        textField.style.borderColor = "white";
    }
}

// email validation
function validateEmailTextField(emailTextField) {
    var emailRegEx = "^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$";
    if(emailTextField.value.match(emailRegEx)) {
        emailTextField.style.borderColor = "white";
    }
    else {
        emailTextField.style.borderColor = "red";
    }
}

//Phone number validation
function validatePhoneNumberTextField(phoneNumberTextField) {
    var phoneNumrRegEx = /^\d{10}$/;
    if(phoneNumberTextField.value.match(phoneNumrRegEx)) {
        phoneNumberTextField.style.borderColor = "white";
    }
    else {
        phoneNumberTextField.style.borderColor = "red";
    }
}



//Side Form Radio Button Switched
function sideFormRadioSwitched(radioButton) {
    var sideDivID;
    
    if(radioButton.name == "accompanyCheckRadio")
        sideDivID = "accompanyingFormDiv";
    
    else if(radioButton.name == "foodCheckRadio")
        sideDivID = "foodDetailsFormDiv";
            
    else if(radioButton.name == "accomodationCheckRadio")
        sideDivID = "accomodationDetailsFormDiv";
    
        if(radioButton.value == "yes") {
        document.getElementById("registrationTable").style.marginLeft = "150px";
        if(!(document.getElementById(sideDivID).style.display == "block")) {
            document.getElementById(sideDivID).style.display = "block";
            sideTableCount++;
        }
    }
    
    else {
        document.getElementById("registrationTable").style.marginLeft = "350px";
        
        if(!(document.getElementById(sideDivID).style.display == "none")) {
            document.getElementById(sideDivID).style.display = "none";
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

//expand or collpse side table

function collapseButtonPressed(closeButton) {
    var parentTableID;
    var parentDivID;
    if(closeButton.id == "accomapnyClose") {
        parentTableID = "accompanyingTable";
        parentDivID = "accompanyingFormDiv";
    }
    
    else if(closeButton.id == "foodClose") {
        parentTableID = "foodDetailsTable";
        parentDivID = "foodDetailsFormDiv";
    }
    
    else if(closeButton.id == "accomodationClose") {
        parentTableID = "accomodationDetailsTable";
        parentDivID = "accomodationDetailsFormDiv";
    }
    if(!(document.getElementById(parentTableID).style.display == "none")) {
        document.getElementById(parentTableID).style.display = "none";
        document.getElementById(parentDivID).style.height = "40px";
        closeButton.className = "fa fa-sort-desc";
    }
    else {
        document.getElementById(parentDivID).style.height = "200px"
        document.getElementById(parentTableID).style.display = "block";
        closeButton.className = "fa fa-sort-asc";
    }
    
}