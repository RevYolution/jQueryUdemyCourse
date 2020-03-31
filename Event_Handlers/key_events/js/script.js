// Like mouse events actions on the keyboard are excellent ways to make your app more interactive. Using keydown()/keyup() functions or the focus()/blur() functions allow users to have prompts that are based on their keyboard interactions. 


$(function() {
  //Using the event parameter to the function allows us to view the value of any key that is pressed while the page is in focus. 
  $("html").keydown(function(event){
    console.log(event.which);
  });

// A very useful implementation of keyDown() is to use it to move elements around the page. 
// Below sets up a event that when the right arrow is pressed the box moves right.
  var blueBox = $(".blue-box");
  var Arrow_Right = 39;

  $("html").keydown(function(event){
    if(event.which == Arrow_Right){
      blueBox.stop().animate({
        marginLeft: "+=10px"
      }, 50);
    }
  })


  //Below we select all of the input fields and assign them to a variable of inputFields. This will allow us to handle all of the inputs with the same actions. 
  var inputFields = $("input:text, input:password, textarea");
// These functions add and remove a box shadow when the text fields gain and lose focus. 
  inputFields.focus(function(){
    $(this).css("box-shadow", "0 0 4px #666");
  });

  inputFields.blur(function(){
    $(this).css("box-shadow", "none");
  })

  //These two functions can also be used a easy form validation as well. 
  //Lets say that we want the name to be at least 3 characters long. We can set up a blur() so that the user know that their input is not what we are looking for. 
  $("#name").blur(function(){
    //
    var text = $(this).val();
    console.log(text);
    if(text.length < 3){
      $(this).css("box-shadow", "0 0 4px #811");
      alert("Name must be more than 2");
    } else {
      $(this).css("box-shadow", "0 0 4px #181");
    }
  })
});