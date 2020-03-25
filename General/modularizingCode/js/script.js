// In this file are examples of how to modularize your code by writing functions that can be called later. This removes the need to write in line functions within the jQuery calls on elements. The modular functions can be used and referenced unlike the functions that are written within the bounds of a jQuery selector call. 

$(function() {
  // Here we state a new function of eventLog() that will write something to the console when it is called. 
  function eventLog() {
    console.log("Mouse or key was pressed.");
  }
  // We select the html document as a whole and have jQuery listen for a click or keydown event. When that happens it calls the eventLog() function and writes to the console. 
  $("html").on("click keydown", eventLog);

  // Here we have a bit more of a complex example of using a few different variables to switch the image in the gallery when the user clicks the image. 
  var i = 0;
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];
  // We grab a reference to the gallery image and store it. 
  var galleryImage = $(".gallery").find("img");
  // The function describes how the image will fadeOut() switch the source attribute then fadeIn(). 
  function nextSlide() {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function(){
      galleryImage.attr("src", images[i]).fadeIn();
    });
  }
  // We reference the gallery image and have jQuery listen for a click event on the element. When that event is triggered the nextSlide function is fired and the image is changed. 
  galleryImage.on("click", nextSlide);

  var redBox = $(".red-box");
  var greenBox = $(".green-box");
  var blueBox = $(".blue-box");
  var inputBox = $(".sample_input");

  function switchText() {
    $(this).text("Mouse in");
    $(this).hover(
      function(){
        $(this).text("Mouse in");
      }, 
      function(){
        $(this).text("By mouse");
      });
  }

  function focusOnInput() {
    $(this).on({
      focus: function() {
        $(this).css('background-color', "blue");
      },
       select: function() {
        $(this).css("color", "red");
      }
    
    });
  }

  redBox.on("click", switchText);
  inputBox.focus(focusOnInput);
});