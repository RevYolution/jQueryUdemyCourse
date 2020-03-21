// Changing CSS properties with jQuery is fairly simple. Selecting the element you want to change and use the    css() call on the selector. The state what property you want to change then set the new value. 

$(function() {
  var redBox = $(".red-box");

  // This increases the height of th redbox by 30px of whatever it was set before. We can check what the value is by console.log(). 
  redBox.css("height", "+=30px");
  console.log(redBox.css("height")+ " is the height of the redbox." );

//---------------------------------- Adding/Removing CSS Classes------------------------------------------//

  // Adding/Removing classes with jQuery is done with the addClass() or removeClass() functions. This allows us to add or remove classes to multiple elements at a time. This is useful if we want to be able to change the style of many elements at a time with preset class styling. 

  // This adds the class of fancy-link to all the a tags within the html and gives it the styling according to the CSS provided. It is possible to add more than one class by just adding spaces between the class names. 
  $("a").addClass("fancy-link");

  // The use of a function allows us to go through all of the list items and add a unique class that will reference the item itself. 
  $("li li").addClass(function(index){
    $(this).addClass("item" + index);
  });

  // This function demonstrates that it is possible to use the parameter of the elements currentClass to only select given items and change them. 
  $("div").addClass(function(index, currentClass){
    if(currentClass === "dummy"){
      return "red-box";
    }
  });

  // The removeClass() is normally chained with addClass() to change classes of elements given different conditions. 
  $(".red-box").removeClass().addClass("blue-box");

});