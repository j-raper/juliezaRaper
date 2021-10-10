const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const suffix = document.getElementById('suffix');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const choosewebsite = document.getElementById('choosewebsite');

console.log('hello')

form.addEventListener('submit', (e) => {
    console.log('hey u here')
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const suffixValue = suffix.value.trim();
    const emailValue = email.value.trim();
    const contactValue = phone.value.trim();
    const chooseWebsiteValue = choosewebsite.value.trim();

    if(firstnameValue === '') {
        //show error
        setErrorFor(firstname, 'Firstname cannot be blank')
    }else{
        //add success
        setSuccessFor(firstname);
    }

    if(lastnameValue === '') {
        //show error
        setErrorFor(lastname, 'Firstname cannot be blank')
    }else{
        //add success
        setSuccessFor(lastname);
    }

    if(suffixValue === '') {
        //show error
        setErrorFor(suffix, 'Firstname cannot be blank')
    }else{
        //add success
        setSuccessFor(suffix);
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
    
    if(contactValue === '') {
        //show error
        setErrorFor(phone, 'Firstname cannot be blank')
    }else{
        //add success
        setSuccessFor(phone);
    }    
}

function setErrorFor(input, message) {
    const personalinformation = input.parentElement; //divpersonalinfo
    const small = personalinformation.querySelector('small');

    small.innerText = message;
    personalinformation.className = 'personalInformation error';
}
function setSuccessFor(input) {
    const personalInformation = input.parentElement;
    personalInformation.className = 'personalInformation success'
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
 