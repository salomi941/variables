//script.js
function validate(){
    let names=document.getElementById("name").value;
    let subject=document.getElementById("subject").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let error_message=document.getElementById("error_message");

    error_message.style.padding ="10px";
    let error
}
if(names.length){

}
    

if (subject.length<10){
    errors.push("please enter a correct subject ");
}
if (isNaN(phone) || phone.length !=10){
    errors.push("please enter a valid phone number");
}

if (email.indexof("@")==-1 || email.length<6){
    errors.push("please enter morethan 40 characters");
}

if (errors.length>0){
    error_messege.innerHTML =errors.join("<br>");
    return false;
    
}
else{

    alert("Form submitted successfully!");
    return true;
}



