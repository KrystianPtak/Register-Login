const loginLink = document.querySelector(".form__register-link");
const registerLink = document.querySelector(".form__login-link");
const formLogin = document.querySelector(".form__login");
const formRegister = document.querySelector(".form__register");
const btnLogin = document.querySelector(".form__login-btn");
const btnRegister = document.querySelector(".form__register-btn");
const formLabel = document.querySelector(".form__label");

loginLink.addEventListener("click", () => {
	formLogin.classList.add("form__login-active");
	formRegister.classList.add("form__register-active");
	clearBtn();
});
registerLink.addEventListener("click", () => {
	formLogin.classList.remove("form__login-active");
	formRegister.classList.remove("form__register-active");
	clearBtn();
});

const checkUsername = () => {
	const username = document.querySelector(".form__name");
	if (username.value.length < 3) {
		username.nextElementSibling.textContent = "Min 3 characters";
		username.parentElement.classList.add("form__error-bottom");
		username.parentElement.classList.remove("form__correct");
	} else {
		username.nextElementSibling.textContent = "";
		username.parentElement.classList.remove("form__error-bottom");
		username.parentElement.classList.add("form__correct");
	}
};

const checkEmail = (form) => {
	const emailInput = form.querySelector(".form__email");

	if (emailInput.value === "") {
		emailInput.parentElement.classList.add("form__error-bottom");
		emailInput.parentElement.querySelector(".form__error").textContent =
			"Email is required";
		emailInput.parentElement.classList.remove("form__correct");
	} else if (
		!emailInput.value.match(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
	) {
		emailInput.parentElement.classList.add("form__error-bottom");
		emailInput.parentElement.querySelector(".form__error").textContent =
			"Email is invalid";
		emailInput.parentElement.classList.remove("form__correct");
	} else {
		emailInput.parentElement.classList.remove("form__error-bottom");
		emailInput.parentElement.classList.add("form__correct");
		emailInput.parentElement.querySelector(".form__error").textContent = "";
	}
};

const checkPassword = (form) => {
	const passwordInput = form.querySelector(".form__password");

	if (passwordInput.value.length < 6) {
		passwordInput.parentElement.classList.add("form__error-bottom");
		passwordInput.parentElement.querySelector(".form__error").textContent =
			"Min 6 characters";
		passwordInput.parentElement.classList.remove("form__correct");
	} else {
		passwordInput.parentElement.classList.remove("form__error-bottom");
		passwordInput.parentElement.classList.add("form__correct");
		passwordInput.parentElement.querySelector(".form__error").textContent = "";
	}
};

const checkBox = () => {
	const formCheckBox = document.querySelector("#terms");

	if (!formCheckBox.checked) {
		formLabel.classList.add("form__remember-error");
		formLabel.classList.remove("form__remember-correct");
	} else {
		formLabel.classList.add("form__remember-correct");
		formLabel.classList.remove("form__remember-error");
	}
};

const updateErrorCount = () => {
	const LogInSuccess = document.querySelector(".form__LogInSuccess");
	const RegisterSuccess = document.querySelector(".form__RegisterSuccess");
	const allInputs = document.querySelectorAll(".form__input");
	let errorCount = 0;

	allInputs.forEach((input) => {
		if (input.parentElement.classList.contains("form__error-bottom")) {
			errorCount++;
		}
		if (formLabel.classList.contains("form__remember-error")) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		LogInSuccess.style.opacity = "1";
		RegisterSuccess.style.opacity = "1";
		setTimeout(() => {
			clearBtn(),
				(LogInSuccess.style.opacity = "0"),
				(RegisterSuccess.style.opacity = "0");
		}, 3000);
	} else {
		LogInSuccess.style.opacity = "0";
		RegisterSuccess.style.opacity = "0";
	}
};

const clearBtn = () => {
	const inp = document.querySelectorAll(".form__input");
	inp.forEach((el) => {
		el.parentElement.classList.remove("form__correct");
		el.parentElement.classList.remove("form__error-bottom");
		el.parentElement.querySelector(".form__error").textContent = "";
		el.value = "";
	});
};

btnRegister.addEventListener("click", (e) => {
	e.preventDefault();
	checkUsername();
	checkEmail(formRegister);
	checkPassword(formRegister);
	updateErrorCount();
	checkBox();
});

btnLogin.addEventListener("click", (e) => {
	e.preventDefault();
	checkPassword(formLogin);
	checkEmail(formLogin);
	updateErrorCount();
});
