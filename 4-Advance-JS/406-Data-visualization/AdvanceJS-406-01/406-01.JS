// console.log(countries);

const showres=(e)=>{
//console.log(e.target.value);

   display(e.target.value);
}

function display(element){
   
    const filter=countries_data.filter((value)=>{
        if(value.name.startsWith(element)){
            return true;
        }
        else false;
    });
    const parent = document.getElementById("table");
    filter.forEach((e)=>{
    // console.log('loop called');
        const new_row = document.createElement('tr');
        const new_countries=document.createElement("td");
        new_countries.innerHTML=e.name;
        new_row.appendChild(new_countries);
        parent.appendChild(new_row);  
    })
}


document.getElementById("search-form").addEventListener
("keyup", showres);