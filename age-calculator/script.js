const button = document.querySelector(".button-wrap button");
const birthDay = document.querySelector('input[name="day"]');
const birthMonth = document.querySelector('input[name="month"]');
const birthYear = document.querySelector('input[name="year"]');
const dayValue = document.querySelector(".days .number");
const monthValue = document.querySelector(".months .number");
const yearValue = document.querySelector(".years .number");
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    if(year%4===0) {
        if(year%100===0) {
            if(year%400===0) return true;
            return false;
        }
        return true;
    }
    return false;
}

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
        let days = date[0] - birthdate[0];
        let months = date[1] - birthdate[1];
        let years = date[2] - birthdate[2];
        if (days < 0) {
            months -= 1;
            days += daysInMonths[months-1<0 ? months+11 : months-1];
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
