function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }
var password_temp;
var username_temp;
window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin");
	form.onsubmit = myfunction;
	var parameter = getParams();
	username_temp = parameter["username"];
	password_temp = parameter["password"];
	
}
function myfunction(){

  var penguin1 = document.forms["myLogin"]["username"];
  var penguin2 = document.forms["myLogin"]["password"];
  return checkLogin(penguin1.value,penguin2.value);
}
function checkLogin(temp1,temp2){
	if(temp1=username_temp && temp2 == password_temp){
		alert("Correct");
		return true;
	}
	
	else{
		alert("Not Correct");
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			