

// Displaying Current Time

setInterval( function timer(){
 const d = new Date()
 let hour = d.getHours()
 let min = d.getMinutes()
 let sec = d.getSeconds()
 let m = "am"
 //Changing maridian
 if( hour => 12){
     m = "pm"
 }
 else {
     m = "am"
 }

 let currentTime = document.getElementById("time").innerHTML =  `${hour} : ${min} : ${sec} ${m}`

},1000)