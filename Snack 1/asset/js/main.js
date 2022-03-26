let container = document.getElementById("container");
let bicycles = [
{
    'name': 'Specialized Roubaix Comp',
    'weight': 8.8 
},
{
    'name': 'Trek Emonda SL5',
    'weight': 8.6
},
{
    'name': 'Specialized Venge Pro',
    'weight': 7.4
},
{
    'name': 'Cannondale Synapse',
    'weight': 8.5 
},
{
    'name': 'Colnago CLX',
    'weight': 8.4
},
{
    'name': 'Bianchi Aria',
    'weight': 8
},

];

let light = 0;

for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i]['weight'] < bicycles[light]['weight'] ) {
        light = i;
    }
    
    
};

let{ name, weight } = bicycles[light];

container.innerHTML = `<div> Il nome della Bici: ${name} <br /> Il peso è: ${weight}kg</div>`
