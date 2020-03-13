// $(function(){}) is the shorthand notation for jQuery(function(){}) they work the same but industry convention is to use $. 
$(function() {
  // jQuery goes here...

  // Simple fading in and out of elements over a set time in milliseconds. fadeTo() allows to set duration and opacity of element. 
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(1000);
  // $(".red-box").fadeTo(1000, 0.5);

  // fadeOut() when complete by default sets the element to display none which removes it from the DOM flow. To avoid this affect use fadeTo() with opacity set to 0. This will prevent the element being removed from the DOM if that is desired. fadeTo() only affects the opacity so if the element has a display none property it will not appear on the page because the DOM will not show it. It will only work if a fadIn() is used in conjunction. 

  // fadeTo() shown over different durations and opacity for elements. fadeToggle() will fade an element in or out with duration in milliseconds depending on current state will also store previous opacity value fading to that value on appearance. 
  $(".red-box").fadeTo(1500, 0.2);
  $(".green-box").fadeTo(2000, 0.5);
  $(".blue-box").fadeTo(2000, 0.8);

  $(".green-box").fadeToggle(1500);
  $(".green-box").fadeToggle(1500);
});