// Changing CSS properties with jQuery is fairly simple. Selecting the element you want to change and use the    css() call on the selector. The state what property you want to change then set the new value. 

$(function() {
  var redBox = $(".red-box");

  // This increases the height of th redbox by 30px of whatever it was set before. We can check what the value is by console.log(). 
  redBox.css("height", "+=30px");
  console.log(redBox.css("height")+ " is the height of the redbox." );

  // Adding/Removing classes with jQuery is done with the addClass() or removeClass() functions. 
});