// We know that we can add new elements with append(),appendTo(),prepend() or prependTo(). It is important to remember that these add whole new elements to the DOM before or after the given selected elements. To change the content of a selected element we need to use text() or html() functions. 

$(function() {
  var firstPar = $("p:first");

  // Below shows the difference between the text() and html() function calls on the first paragraph of the page. The text() call only grabs the text that appears between the tags of the first paragraph. Where the html() call parses the html tags that are contained between the paragraph tags along with the text.  
  console.log(firstPar.text());
  console.log(firstPar.html());

  // It is also possible to add in more content as shown below. 
  firstPar.html(firstPar.html() + " <em>This was added with jQuery</em>");
});