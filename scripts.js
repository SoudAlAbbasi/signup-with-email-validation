const id = (id) => document.getElementById(id);
const firstName = id("fname"),
	lastName = id("lname"),
	email = id("email"),
	password = id("password"),
	form = id("form");
form.addEventListener('submit', e => {
	e.preventDefault();
	validateInputs();
});
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.invalid');
	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success')
}
const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.invalid');
	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};
const isValidEmail = email => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	if (firstNameValue === '') {
		setError(firstName, 'First Name cannot be empty');
	} else {
		setSuccess(firstName);
	}
	if (lastNameValue === '') {
		setError(lastName, 'Last Name cannot be empty');
	} else {
		setSuccess(lastName);
	}
	if (emailValue === '') {
		setError(email, 'Email Address cannot be empty');
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Looks like this is not an email');
	} else {
		setSuccess(email);
	}
	if (passwordValue === '') {
		setError(password, 'Password cannot be empty');
	} else if (passwordValue.length < 8) {
		setError(password, 'Password must be at least 8 character long')
	} else {
		setSuccess(password);
	}
};