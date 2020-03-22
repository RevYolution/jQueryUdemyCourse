// Handlers are used to change elements on the page with a user interacts with them in different ways. Two simple ways that users can interact with elements is by mouse interaction. Most commonly these events are click or hover events. Simply to handle these events the click() or hover() functions can be used. 

$(function() {
  var redBox = $(".red-box");
  var greenBox = $(".green-box");
  var blueBox = $(".blue-box");

  redBox.click(function(){
    $(this).fadeTo(500, 0.25).text("Changed with click in jQuery");

  });

  // The hover() function works slightly differently than it does to its CSS counterpart. The hover() function will be triggered when the mouse enters OR leaves the bounds of the element the handler is looking at. This can be see in the console in the example below. Each time the mouse moves into OR out of the green box another Box hovered console will be logged. 

  greenBox.hover(function(){
    $(this).text("Hovered changed with jQuery");
    console.log("Box hovered");
  });

  // To better control the response of hover effects it is possible to use the mouseenter() and mouseleave() functions. These functions allows the developer to dictate how the app acts in each event instance of a mouse cursor entering or leaving the bounds of an element. 

  blueBox.mouseenter(function(){
    $(this).text("Mouse on box");
  });

  blueBox.mouseleave(function(){
    $(this).text("Mouse left :(");
  });

  // It is possible to still use the hover() function and have the same control as using the mouseenter() and mouseleave() functions. This is done by giving the hover() function two arguments for what actions to take when the mouse is in the element and when the mouse is out of the element. The basic structure looks like         hover(handlerIn, handlerOut) == hover(function(){..In logic..}, function(){..Out logic..}).

  $("h1").hover(function(){$(this).css("color", "orange");}, 
  function(){$(this).css("color", "black");
  });
});