// alert("hello")

function validation(e){
    e.preventDefault();
    var first_name=document.getElementById("first_name").value;
    var last_name= document.getElementById("last_name").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var telephone= document.getElementById("telephone").value;

    var first_namecheck=/^[A-Za-z. ]{3, 30}$/;
    var last_namecheck="/^[A-Za-z. ]{3, 30}$/";
    var passwordcheck="/^(?=.*d)(?=.*[a-zA-Z].{8,20}$/";
    var emailcheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var telephonecheck = /^[6-9]\d{9}$/;

    if(first_namecheck.test(first_name)){
        document.getElementById('firsterror').innerHTML = "";
    }
    else{
        document.getElementById("firsterror").innerHTML =
         "** First name is invalid";
    }

    if(last_namecheck.test(last_name)){
        document.getElementById('lasterror').innerHTML = "";
    }
    else{
        document.getElementById("lasterror").innerHTML = 
        "** last name is invalid";
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = "";
    }
    else{
        document.getElementById("lasterror").innerHTML =
         "** invalid password";
    }



    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = "";
    }
    else{
        document.getElementById("emailerror").innerHTML = 
        "** Email is invalid";
    }




    if( telephonecheck.test(telephone)){
        document.getElementById('telephoneerror').innerHTML = "";
    }
    else{
        document.getElementById("telephoneerror").innerHTML = 
        "** invalid Telephone";
    }



}

document.getElementById("submit").addEventListener("keyup",
validation);
