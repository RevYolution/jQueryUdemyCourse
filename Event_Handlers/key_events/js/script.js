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

  // In a similar vein as above the change() function handles any change that occurs on the page such as radio selection or a drop down option being selected. 

  // Here we are watching for a change on the checkbox and once there is one the box shadow will change. 
  $("#checkbox").change(function(){
    var isChecked = $(this).is(":checked");
    if(isChecked){
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("labe[for='cb']").css("box-shadow", "0 0 4px #811");
    }
  });

  // We can also watch for changes on drop downs as shown below.

  $("#selection").change(function(){
    //On a change we are storing the text of the option that is selected.  
    var selectedOption = $(this).find(":selected").text();
    //Sends and alert of what option was chosen. 
    alert(selectedOption);

  // You can intercept form submission via the submit event.
  // jQuery provides the submit() for this. A common use case is to perform
  // client-side form validation to avoid submitting a form with invalid data.

  // For instance, let's check if the user wrote a message in the textarea.
  $("#form").submit(function(event) {
    var textarea = $("#message");
    if (textarea.val().trim() === "") {
      // No message, add red highlighting to indicate error
      textarea.css("box-shadow", "0 0 4px #811");

      // The default event now would be to submit the form. The browser will do
      // this automatically when clicking a submit button. We prevent this using
      // preventDefault(). This way, the form will not be submitted.
      event.preventDefault();
    } else {
      // Nothing to do, let the form be submitted.
    }
  });
  });
});