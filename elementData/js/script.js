$(function() {
  // jQuery allows for the storage of data to elements for later use with the data() function. 

  var gallery = $(".gallery");
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // Here we are storing the images array to the gallery element with the data() function. It stores it as a key value pair with the key as the first parameter given in the function call. 
  gallery.data("GalleryImages", images);
  console.log(gallery.data("GalleryImages"));

  // Here we are adding a new item of data to the gallery element. The item will have a key of "name" with a value of "SlideShowGallery". 
  gallery.data("name", "SlideShowGallery");

  // To access all the data associated with a given element it is possible to just call the data() function on the element and an object with all of the data will be available. 
  console.log(gallery.data());

  // To remove data run the removeData() function with the key that is to be removed. 
  gallery.removeData("name");
  console.log(gallery.data());

  // HTML5 also allows for the data- tag to be applied within the html code. To access this run the same function of data() with the string that follows the data-. 
  var h1 = $("h1");
  console.log(h1.data());

  
});