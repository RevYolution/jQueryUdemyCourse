$(function() {
  // Sets up the reference to the gallery within the DOM and selects the first image that is there. 
  var galleryImages = $(".gallery").find("img").first();

  // Creates an array of the images contained in the images folder to pull from. Allows jQuery to use animations/replacement functions to change the image. 
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // Sets a counter for the following function to use and change the image contained in the DOM. 
  var i = 0;

  // This function cycles through the images by resetting the src attribute of the .gallery class in our DOM. 
  setInterval(function () {
    // i is used to pick an image from the images array and is set by % the length of the array. It will always equal 0, 1, or 2. 
    i = (i + 1) % images.length;
    // This utilizes the galleryImages variable, which is grabbing the first image in our DOM, and fades it out. It then uses another nested function to reset the src attribute to another image then fades the new image back into the DOM.  
    galleryImages.fadeOut(function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn(1000);
    });
  }, 2000);

});