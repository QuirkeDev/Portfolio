function startAnimate() {
  
  document.getElementById("profile").style.marginLeft = "0%";
  $("#main-char").animate( {
    top: $(this).offset().top -27
  }, 1000, function() {
  });


}



// Get the root element
// var r = document.querySelector(':root');


// / Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }