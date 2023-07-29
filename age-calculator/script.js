const button = document.querySelector(".button-wrap button");
const birthDay = document.querySelector('input[name="day"]');
const birthMonth = document.querySelector('input[name="month"]');
const birthYear = document.querySelector('input[name="year"]');
const dayValue = document.querySelector(".days .number");
const monthValue = document.querySelector(".months .number");
const yearValue = document.querySelector(".years .number");

button.addEventListener("click", () => {
    let validDay = true;
    let validMonth = true;
    let validYear = true;
	const birthdate = new Date(
		`${birthMonth.value}-${birthDay.value}-${birthYear.value}`,
	)
		.toLocaleDateString()
		.split(".");
	const date = new Date().toLocaleDateString().split(".");

	if (!birthDay.value) {
        birthDay.classList.add('required');
        validDay=false;
	} else if (Number(birthDay.value) < 1 || Number(birthDay.value) > 31) {
        birthDay.classList.add("invalid");
        birthDay.classList.remove('required');
        validDay=false;
	} else {
        birthDay.classList.remove('required');
		birthDay.classList.remove("invalid");
        validDay=true;
	}
    
	if (!birthMonth.value) {
        birthMonth.classList.add('required');
        validMonth=false;
	} else if (Number(birthMonth.value) < 1 || Number(birthMonth.value) > 12) {
        birthMonth.classList.add("invalid");
        birthMonth.classList.remove('required');
        validMonth=false;
	} else {
        birthMonth.classList.remove('required');
		birthMonth.classList.remove("invalid");
        validMonth=true;
	}
    
	if (!birthYear.value) {
        birthYear.classList.add('required');
        validYear=false;
	} else if (Number(birthYear.value) > Number(date[2])) {
        birthYear.classList.remove('required');
        birthYear.classList.add("future-year");
        validYear=false;
	} else {
        birthYear.classList.remove('required');
		birthYear.classList.remove("future-year");
        validYear=true;
	}

    if(validDay && validMonth && validYear) {
        let days = Number(date[0]) - Number(birthdate[0]);
        let months = Number(date[1]) - Number(birthdate[1]);
        let years = Number(date[2]) - Number(birthdate[2]);
        if (days < 0) {
            months -= 1;
            days += 30;
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        dayValue.textContent = days;
        monthValue.textContent = months;
        yearValue.textContent = years;
    } else {
        dayValue.textContent = '--';
        monthValue.textContent = '--';
        yearValue.textContent = '--';
    }

});
