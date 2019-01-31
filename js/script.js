window.onload = function () {

    var d = new Date();

    var ampm = d.getHours() >= 12 ? 'pm' : 'am'

    var datestring = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes() + " " + ampm;
    document.getElementById('time').innerHTML = datestring;

}

function validateForm() {
    errorForm('personalName');
    errorForm('personalAddress');
    errorForm('personalZipCode');
    errorForm('personalPhone');
    errorForm('personalEmail');
    errorForm('personalPassword');
    errorForm('personalVerifyPassword');
    errorOptions('personalCountry');
    // errorForm('personalGender');
    // errorForm('personalPreferences');
    return false;
}

function errorForm(elementId) {
    var elementValue = document.getElementById(elementId).value;
    if (elementValue == "") {
        var errorMessage = "*Please Enter this field";
        document.getElementById(elementId + 'Error').innerHTML = errorMessage;
    }
    document.getElementById(elementId.replace('personal', 'office')).value = elementValue;
    return false;
}

function errorOptions() {
    var selector = document.getElementById('personalCountry');
    var value = selector[selector.selectedIndex].value;
    if (value == "options") {
        var errorMessage = "*Please Enter this field";
        document.getElementById('personalCountryError').innerHTML = errorMessage;
        document.getElementById('display').innerHTML = value;
    }
    return false;
}

function errorRadio() {
    
}