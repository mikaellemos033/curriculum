/**
* Created with curriculum.
* User: mikaellemos033
* Date: 2015-01-05
* Time: 04:37 PM
* To change this template use Tools | Templates.
*/

window.onload = function(){

 setInterval(relogio, 1000);
 
}


function relogio(){
 
 var data = new Date();
 
 var hora = data.getHours();
 
 var minu = data.getMinutes();
 
 var seconds = data.getSeconds();
 
 var mens ="";
  
 if (hora == 4 || hora < 13){
   mens = "Olá, Bom Dia "; 
 }
 
 else if(hora > 12 && hora <= 17){
  mens = "Olá, Boa Tarde ";
 }
 
 else if(hora > 17 || hora <=24 || hora <= 3){
  mens ="Olá, Boa Noite ";
 } 
 
 if(hora < 10){
  hora = "0"+hora;
 }
 
 if(minu < 10){
  minu = "0"+minu;
 }
 
 if(seconds < 10){
  seconds = "0"+seconds;
 }
 
 var htmlsauda = document.getElementById("saudacao");
 var htmlhora =  document.getElementById("hora");
 
 htmlsauda.innerHTML = mens;
 htmlhora.innerHTML= "Atualmente São "+hora+":"+minu+":"+seconds;
 
}
