var commonValues ={
    Toyota : ["Camry","Corolla","RAV4","Highlander","Tacoma"],
    Volkswagen :["Golf","Jetta","Passat","Tiguan","Atlas"],
    Ford : ["F-150","Mustang","Escape","Explorer","Focus"]
}

function changeDropdownValue(value){
    if(value.length == 0){
        document.getElementById("me").innerHTML = "<option></option>";
    }else{
        var commonOptions = "";
        for(categoryID in commonValues[value]){
            commonOptions +="<option>" + commonValues[value][categoryID] + "</option>"
        }
        document.getElementById("me").innerHTML = commonOptions
    }
}

function valid() {
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone').value;
    var email = document.getElementById("email").value;
    var email1 =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneNumber1 = /^\d{10}$/;
    var name1= /^[A-z]+$/; 
    
    if (name1.test(name)) {
        
    } 
    else{
        alert("Invalid Name!")
    }
    if (phoneNumber1.test(phoneNumber)) {
            
    } 
    else {
        alert("Invalid Mobile no.!")
    }
    if (email1.test(email)) {
        
    } 
    else{
        alert("Invalid Email.!")
    }
}


function valid1() {
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phone').value;
    var phoneNumber1 = /^\d{10}$/;
    var name1= /^[A-z]+$/; 
    
    if (name1.test(name)) {
        
    } 
    else{
        alert("Invalid Name!")
    }
    if (phoneNumber1.test(phoneNumber)) {
            
    } 
    else {
        alert("Invalid Mobile no.!")
    }
}

