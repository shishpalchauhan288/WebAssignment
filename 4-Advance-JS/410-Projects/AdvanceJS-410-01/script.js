 const searchuser = (e) => {
    e.preventDefault();
    var search = document.getElementById("search").value;
    // document.getElementById('result')=

    fetch("https://api.github.com/users/"  + search).then((result)=>result.json()).then((data)=>{

        document.getElementById('result').innerHTML =
          
            ` <a target="_blank" href="https://api.github.com/${search}">  
            <img src = ${data.avatar_url}  alt= "No user found"/> <a/>`;
    });
}
    
 let form = document.getElementById("myForm");
form.addEventListener('submit', searchuser);
