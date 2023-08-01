const id = (id) => document.getElementById(id);
const placeholder = (placeholder) => document.getAttribute(placeholder);
const firstName = id("fname"),
	lastName = id("lname"),
	email = id("email"),
	password = id("password"),
	form = id("form");
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.invalid');
	errorDisplay.innerHTML = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success')
}
const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.invalid');
	errorDisplay.innerHTML = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};
const isValidEmail = email => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', e => {
	e.preventDefault();
	validateInputs();
});
const validateInputs = () => {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	// First Name Field Conditions
	if (firstNameValue === '') {
		setError(firstName, firstName.placeholder + ' cannot be empty');
	} else if (firstNameValue.length > 20) {
		setError(firstName, firstName.placeholder + ' cannot be longer than 20 characters long')
	} else {
		setSuccess(firstName);
	}
	// Last Name Field Conditions
	if (lastNameValue === '') {
		setError(lastName, lastName.placeholder + ' cannot be empty');
	} else if (lastNameValue.length > 20) {
		setError(lastName, lastName.placeholder + ' cannot be longer than 20 characters long')
	// } else if (lastName.patternMismatch === true) {
	// 	setError(lastName, lastName.placeholder + ' can only be letters')
	} else {
		setSuccess(lastName);
	}
	// Email Field Conditions
	if (emailValue === '') {
		setError(email, email.placeholder + ' cannot be empty');
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Looks like this is not an email');
	} else if (emailValue.length > 30) {
		setError(email, email.placeholder + ' cannot be longer than 30 characters long')
	} else {
		setSuccess(email);
	}
	// Password Field Conditions
	if (password.value === '') {
		setError(password, password.placeholder + ' cannot be empty');
	} else if (passwordValue.length < 8) {
		setError(password, password.placeholder + ' must be at least 8 character long')
	} else if (passwordValue.length > 16) {
		setError(password, password.placeholder + ' cannot be longer than 16 characters long')
	} else {
		setSuccess(password);
	}
};