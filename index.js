const from = document.getElementById('form');
const from = document.getElementById('firstname');
const from = document.getElementById('lastname');
const from = document.getElementById('suffix');
const from = document.getElementById('email');
const from = document.getElementById('gender');
const from = document.getElementById('contact');
const from = document.getElementById('chooseWebsite');

from.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const suffixValue = suffix.value.trim();
    const emailValue = email.value.trim();
    const genderValue = gender.value.trim();
    const contactValue = contact.value.trim();
    const chooseWebsiteValue = chooseWebsite.value.trim();

if(firstnameValue === '') {
    //show error
    setErrorFor(firstname, 'Firstname cabbot be blank')
}else{
    //add success
    setSuccessFor(firstname);
    }
}

function setErrorFor(input, message) {
    const personalInformation = input.parentElement; //divpersonalinfo
    const small = personalInformation.querySelector('small');

    small.innerText = message;
    personalInformation.className = 'personalInformation error';
}
function setSuccessFor(input) {
    const personalInformation = input.parentElement;
    personalInformation.className = 'personalInformation success'
}
 