const priceSwitch = document.getElementById('price-switch');
const priceSwitchPosition = document.getElementById('switch-position');
const pricesMonthly = document.getElementsByClassName('price-monthly');
const pricesAnnually = document.getElementsByClassName('price-annually');

priceSwitch.addEventListener('click', ()=>{
    priceSwitchPosition.classList.toggle('switch-annually');
    priceSwitchPosition.classList.toggle('switch-monthly');
    for(let element of pricesAnnually){
        element.classList.toggle('no-display');
    }
    for(let element of pricesMonthly){
        element.classList.toggle('no-display');
    }

})

