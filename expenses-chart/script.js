import data from './data.json' with {type: 'json'};

const chartsContainer = document.querySelector('.chart-top-bars');
const today = new Date().getDay()-1;

for (let i in data) {
    const newDiv = document.createElement("div");

    const day = document.createElement("span");
    day.appendChild(document.createTextNode(data[i].day))
    
    
    const bar = document.createElement("div");
    bar.classList.add('bar');
    bar.style.height = `${data[i].amount*2*0.7}%`;
    if(parseInt(i) === today) bar.style.backgroundColor = 'hsl(186, 34%, 60%)';

    const amount = document.createElement('div');
    amount.classList.add('amount');
    amount.appendChild(document.createTextNode(`$${data[i].amount}`));

    newDiv.appendChild(day);
    newDiv.appendChild(bar);
    newDiv.appendChild(amount);

    chartsContainer.appendChild(newDiv);
}