
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = myfunction;
}

function myfunction(){
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var temp_password = document.forms["myForm"]["temp_password"];
 
    return validateForm(password.value,temp_password.value);
   
    }

function validateForm(temp1,temp2) {
 
    if(temp1 != temp2){
        var tempspan = document.getElementById("errormsg");
        tempspan.innerHTML = "password not math";
        return false;
    }
    else{
        return true;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}