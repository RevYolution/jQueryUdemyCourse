// Previously we have added new elements into the DOM and we have also been able to target elements with event handlers within the DOM. However, anything that is targeted with an event handler will not target dynamically added elements. To target such elements we must delegate the action through a parent element. 

$(function() {
  // Here we see that when we add a click event on the <p> all that are not dynamically added to the page respond to the event. 
  $("p").click(function(){
    $(this).slideUp();
  });

  $("h2").append("<p>This paragraph was added in jQuery</p>").append("Another paragraph added.");

  // These functions show that even the box that is added will respond to the click event. It is important to choose a parent element that will always be on the page because if it is removed we will run into the same issue of event will no long apply. 
  $("#box_div").append("<div class = red-box>Added red box</div><br>");
  $("#box_div").on("click", "div", function(){
    $(this).text("Changed with jQuery");
  });
});