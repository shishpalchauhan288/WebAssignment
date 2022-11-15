// alert("hi everyone");
var inputValue = document.querySelector(".input");
var windspeed = document.querySelector(".windspeed");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var apiKey = "1fdbf0a2f50cd3d40b9b0a5017429296";

function input (e){
e.preventDefault();
var word=document.getElementById('inputValue').value;
// console.log(word);

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}`).then((response)=>response.json()).then((data)=>{
    console.log(data)
 var tempValue=data.main.temp
 var descValue=data.weather[0].description
 var windspeedValue=data.wind.speed;
 temp.innerHTML= 'Temperature:' + ' ' + tempValue;
 desc.innerHTML = 'Sky Conditions:' + ' ' + descValue;
 windspeed.innerHTML ='Wind Speed:'+ ' ' + windspeedValue;

})
   
}



inputValue.addEventListener('submit',input);

























// var inputValue = document.querySelectorAll(".input");

// var windspeed = document.querySelector(".windspeed");
// var temp =document.querySelector(".temp");
// var desc = document.querySelector(".desc");
// var apikey = "645361ab0a1a88ed0eb9b37762c492c9";
// function input (e){
//     e.preventDefault();
//     var word=document.getElementById('inputValue').value;
//     console.log(word);

//     fetch( `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apikey}`).then((response)=>response.json()).then((data)=>{
       
//     console.log(data);
//     var tempValue = data.main.temp
//     var descValue=data.weather[0].description
//     var windspeedValue=data.wind.speed;

//     temp.innerHTML = 'Temprature'  + " " + tempValue;
//     desc.innerHTML =  'Sky Condition' + "" +descValue;
//     windspeed.innerHTML = 'Wind Speed' + "" + windspeedValue;

   


// })
// }



// inputValue.addEventListener('submit', input);