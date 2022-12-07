
var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');

var cautionP = document.getElementById('caution');
var successP = document.getElementById('success');




function Login(){
    var x = userEmail.value;
    var y = userPassword.value;
    
    if(userEmail.value=="" || userPassword.value==""){
        cautionP.style.display="block";
    }else{
        cautionP.style.display="none";

    if(x=='admin'&& y=="123"){
    
    home();

    }else {
        successP.style.display="none";
        cautionP.style.display="block";



    }
    clearForm();
    }
    

}
function home(){
cautionP.style.display="none";

 successP.style.display="block";
}


function clearForm(){
    userName.value='';
     userEmail.value='';
     userPassword.value='';

 }

