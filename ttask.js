

function a() {
  function tellFortune(jobTitle, geoLocation, salary, company) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' Annual salary ' +
      salary + ' ' + ' for ' + company;
    alert(future);
  }
  var a = document.getElementById("job").value;
  var b = document.getElementById("location").value;
  var c = document.getElementById("salary").value;
  var d = document.getElementById("company").value;
  tellFortune(a, b, c, d);

}
function ageCalculator() {
  var userinput = document.getElementById("DOB").value;
  var dob = new Date(userinput);
  if (userinput == null || userinput == '') {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {

    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);

    //display the calculated age  
    return document.getElementById("result").innerHTML =
      "Age is: " + age + " years. ";
  }
}
function b() {
  function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' sancks of tea to last you until the ripe old age of ' + maxAge;
    alert(message);
  }
  var a = document.getElementById("age").value;
  var b = document.getElementById("day").value;
  calculateSupply(a, b);
}
function c() {

  function calcGeometry(radius) {
    var circumference = Math.PI * 2 * radius;
    alert("The circumference is " + circumference);
    var area = Math.PI * radius * radius;
    alert("The area is " + area);
  }
  var a = document.getElementById("radius").value;

  calcGeometry(a);
}

function d() {


  function fahrenheitToCelsius(fahrenheit) {

    var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
    alert(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  }
  var a = document.getElementById("fahrenheit").value;

  fahrenheitToCelsius(a);

}
function e() {
  function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius * 9) / 5 + 32;
    alert(celsius + '°C is ' + celsiusInF + '°F');
  }
  var a = document.getElementById("celsius").value;

  celsiusToFahrenheit(a);
}
