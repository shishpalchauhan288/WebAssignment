let input = document.querySelector('#input');
let searchbtn = document.querySelector('#search');
let apikey = "7acf9d53-95f0-4ab0-90b7-5d8437b4d172";
let notFound = document.querySelector(".not_found");
let defBox=document.querySelector(".def");

searchbtn.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(e);
    let word =input.value;
    if(word===''){
        alert("No word typed")
        return;
    }
    Getdata(word);
})

async function Getdata(word){
    const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apikey}`
        );
        const data=await response.json();
        // console.log(data);
   if(typeof data[0]==='string'){
    let heading = document.createElement('h3');
    heading.innerHTML='Did you mean ?'
    notFound.appendChild(heading);
    data.forEach(element => {
        let suggestion=document.createElement('span');
        suggestion.classList.add('suggested');
        suggestion.innerHTML=element;
        notFound.appendChild(suggestion)
        
    });
    return;
}
let defination = data[0].shortdef[0];
defBox.innerHTML=defination;
        // if(typeof data)
}