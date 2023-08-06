function temp() {
   var tempInput = document.getElementById("temp");
   var select = document.getElementById("mySelect");
   var selectedOption = select.options[select.selectedIndex];

   if (isNaN(tempInput.value)) {
       alert("Enter Only Numbers");
   } else {
       var tempValue = parseFloat(tempInput.value);

       if (selectedOption.value == 'ftemp') {
           var ans = Math.round((((tempValue - 32) * 5 / 9) * 100) / 100);
           document.getElementById("answer").style.background = "transparent";
           document.getElementById("answer").innerHTML = "Given Temperature: " + tempValue + "<br>Option: Fahrenheit To Celsius<br>" + "Answer is " + ans + " Degree Celsius";
       } else if (selectedOption.value == 'ctemp') {
           var ans = (tempValue * 9 / 5) + 32;
           document.getElementById("answer").style.background = "transparent";
           document.getElementById("answer").innerHTML = "Given Temperature: " + tempValue + "<br>Option: Celsius To Fahrenheit<br>" + "Answer is " + ans + " Degree Fahrenheit";
       } else if (selectedOption.value == 'ctemp1') {
           var ans = (tempValue * 9 / 5) * 5 / 9 + 273;
           document.getElementById("answer").style.background = "transparent";
           document.getElementById("answer").innerHTML = "Given Temperature: " + tempValue + "<br>Option: Celsius To Kelvin<br>" + "Answer is " + ans + " Kelvin";
       }
   }
}

function reset() {
   location.reload();
}
