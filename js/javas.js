//on-scroll function for navigation bar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  //when the page is scrolled over 80px then:
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
      //add white background to the nav bar
      document.getElementById("ul").style.padding = "8px 10px";
      document.getElementById("ul").style.backgroundColor = "rgb(240, 239, 240)";
      text = document.querySelectorAll(".menu-title");
      text.forEach(element => {
          element.style.color = 'black';
          element.style.borderColor = "black";
        });
        document.getElementById("icondiv").innerHTML = '<img class="icon" src="../Icons/icB.png">';
    } else {
        //make nav bar transparent
        document.getElementById("ul").style.padding = "12px 10px";
        document.getElementById("ul").style.background = "transparent";
  }


  //scroll function to show go to top floating button
  if (document.documentElement.scrollTop > 1000) { //when the page is scrolled over 1000px then:
    document.getElementById('floating-button').style.display = 'block';  //display the button
  }
  else{
    document.getElementById('floating-button').style.display = 'none';    //hide the button
  }
}

// function for  subscribe to newsletter
function subscribed() {
  var element = document.getElementById("email");
  if(element.checkValidity()) {
      //if valid email entered
      alert("Successfully subscribed.")
      document.getElementById("subscribe").reset();
      return false;
  }
}