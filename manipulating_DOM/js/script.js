//------------------------------ Adding Elements to the DOM -------------------------------//

// It is possible to give either HTML code, a function or an already existing element to these functions. If given an existing element the element will be moved unless there are multiple places it needs to be moved to. In this case the element will be moved once then cloned each additional time. 

$(function() {
  // append() adds in the parameter element to each of the selector elements that it is being added to as the last child. Can also be done with appendTo() but the element that is being added now goes first. 

  // $("ul ul:first").append("<li> Added with append()</li>");
  // $("<li>Added with appendTo()</li>").appendTo("ul ul:first");

  // prepend() will add an element in front of the given selector.

  // $("ul ul:first").prepend("<li>Added with prepend()</li>");
  // $("<li>Added with prependTo()</li>").prependTo("ul ul:first");

  // To create siblings of an element use either before()/after(). 

  // $(".red-box").after("<div class = 'red-box'>Added with after()</div>");
  // $(".red-box").before("<div class = 'red-box'>Added with before()</div>");
  // $(".green-box").before("<div class = 'green-box'>Added with before()</div>");

//------------------------------ Replacing Elements in the DOM -------------------------------//

// replaceWith() will replace the selected element with the element that is provided as the argument. 

$("li").replaceWith("<li>Replaced with replaceWith()</li>");
$(".red-box, .blue-box").replaceWith("<div class = green-box>Replaced w/ replaceWith()</div>");

});