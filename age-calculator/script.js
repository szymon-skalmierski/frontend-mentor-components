const button = document.querySelector('.button-wrap button');
const birthDay = document.querySelector('input[name="day"]');
const birthMonth = document.querySelector('input[name="month"]');
const birthYear = document.querySelector('input[name="year"]');
const dayValue = document.querySelector('.days .number');
const monthValue = document.querySelector('.months .number');
const yearValue = document.querySelector('.years .number');

button.addEventListener('click', ()=>{
    const birthdate = new Date(`${birthMonth.value}-${birthDay.value}-${birthYear.value}`).toLocaleDateString().split('.');
    const date = new Date().toLocaleDateString().split('.');
    let days = Number(date[0]) - Number(birthdate[0]);
    let months = Number(date[1]) - Number(birthdate[1]);
    let years = Number(date[2]) - Number(birthdate[2]);
    if (days<0) {
        months-=1;
        days+=30;
    }
    if (months<0) {
        years-=1;
        months+=12;
    }
    dayValue.textContent = days;
    monthValue.textContent = months;
    yearValue.textContent = years;
})