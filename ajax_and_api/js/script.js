// $(function () {

//   // As another example of AJAX calls in jQuery, we access the PokéAPI to build
//   // a Pokédex.

//   var pokeapi = "https://pokeapi.co/api/v2/generation/1";
//    //  getJSON(url, [data], [success]) is the method signature for getJSON(). url is a string that contains the URL which the request is sent. data is either a plain object or string that is sent to the server with the request. success is a callback function that is executed once the request is successful. 

//    // .done() is a a function that is called on a Deferred function is successfully resolved. Here once the getJSON() is resolved by grabbing a JSON object from the pokeon api the done function is called. What this does is goes through the object and creates new p elements with what is gotten.  
//   $.getJSON(pokeapi).done(function(data) {
//     console.log(data);  // Explore available data in the Developer Tools Console
//    // .each() method is designed to make DOM looping constructs concise and less error-prone. When called it iterates over the DOM elements that are part of the jQuery object. Each time the callback runs, it is passed the current loop iteration, beginning from 0. More importantly, the callback is fired in the context of the current DOM element, so the keyword this refers to the element.
//    // Here the each() function is looping over the data that is received from the poekmon api. It then creates a paragraph with the index it is at with the Pokemon name capitalized. It then appends it to the DOM within the div with an id of pokedex.  
//     $.each(data.pokemon_species, function(index, pokemon) {
//       var name = capitalize(pokemon.name);
//       var paragraph = $("<p>").html("Pokémon species no. " + (index+1) + " is " + name);
//       paragraph.appendTo("#pokedex");
//     });
//    // .fail() is a method that is called on a Deferred function is failed. 
//   }).fail(function() {
//     // Handle error case
//     console.log("Call to PokéAPI failed.");
//    // .always() is a function that is always called on a Deferred function regardless if it is successful or rejected. 
//   }).always(function() {
//     // Will always be executed (in either case).
//     console.log("Pokémon is awesome.")
//   });

// });

// // Capitalizes a given string.
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

$(function () {

  // Let's further improve the Pokédex while diving deeper into AJAX with jQuery.
  var pokeapi = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapi).done(function(data) {
    console.log(data);  // Explore available data in the Developer Tools Console
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = capitalize(pokemon.name);

      // Add an additional link to show image of the Pokémon.
      var boldName = $("<strong>").text(name);
      var link = $("<a>")
          .attr("id", pokemon.name)
          .attr("href", "#")
          .append(boldName);
//TODO: Figure out how these are getting pulled to number. 
      var paragraph = $("<p>")
          .html("Pokémon species no. " + (index+1) + " is ")
          .append(link);
      paragraph.appendTo("#pokedex");

      // Add handler to the link to fetch and display image.
      // The helper function showPokemon is defined below.
      link.click(function() {
        showPokemon(pokemon.name);  // API needs the non-capitalized name
      });
    });
  }).fail(function() {
    // Handle error case
    console.log("Call to PokéAPI failed.");
  }).always(function() {
    // Will always be executed (in either case).
    console.log("Pokémon is awesome.")
  });

  // Only select this element once and store in variable.
  var detailsDiv = $("#pokemon-details");

  function showPokemon(name) {
    $.getJSON(pokemonByName + name).done(function(details) {
      console.log(details);  // To explore data in browser

      // Show selected Pokémon in the details div.
      var image = $("<img>").attr("src", details.sprites.front_default);
      detailsDiv.empty()
          .append("<h2>" + capitalize(name) + "</h2>")
          .append(image);

    }).fail(function(error) {
      console.log("Could not retrieve details for " + name);
    });
  }

});

// Capitalizes a given string.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}